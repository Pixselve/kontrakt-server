import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import { Context }                          from "../../../index";
import { Workbook }                         from "exceljs";
import chroma                               from "chroma-js";

@Resolver()
export class ContractsToExcel {
  @Authorized("TEACHER")
  @Query(returns => String)
  async contractsToExcel(@Ctx() { prisma }: Context): Promise<String> {
    const workbook = new Workbook();
    workbook.creator = "Kontrakt";
    workbook.created = new Date();

    const [contracts, students, skillStatuses] = await Promise.all([prisma.contract.findMany({
      include: { skills: true },
      orderBy: { date: "desc" }
    }), prisma.student.findMany({
      include: { skillToStudents: true },
      orderBy: { lastName: "asc" }
    }), prisma.skillStatus.findMany({ include: { color: true } })]);

    contracts.forEach(contract => {
      const sheet = workbook.addWorksheet(`Contrat du ${ contract.date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long"
      }) }`);
      sheet.columns = [
        {
          header: "Nom de famille",
          key: "lastName",
          width: 15
        },
        {
          header: "Prénom",
          key: "firstName",
          width: 15
        },
        ...contract.skills.map(skill => ({ header: skill.name, key: skill.id.toString(), width: 35 }))
      ];

      // @ts-ignore
      sheet.findRow(1).border = { bottom: { style: "thick", color: { argb: "00000000" } } };

      students.forEach(student => {
        const row = sheet.addRow([student.lastName, student.firstName, ...contract.skills.map(skill => {
          const skillToStudentFound = student.skillToStudents.find(skillToStudent => skillToStudent.skillId === skill.id);
          if (skillToStudentFound) {
            return skillToStudentFound.mark;
          } else {
            return "TODO";
          }
        })]);


        row.eachCell((cell, colNumber) => {
          const skillStatus = skillStatuses.find(skillStatus => skillStatus.mark === cell.value);
          if (skillStatus) {
            cell.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: `00${ chroma("#" + skillStatus.color.rgb).brighten(2).hex().replace("#", "") }`
              }
            };
            cell.value = skillStatus.text;
          }

        });
      });
    });

    // @ts-ignore
    const buffer: Buffer = await workbook.xlsx.writeBuffer();
    const base64 = buffer.toString("base64");
    return `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${ base64 }`;
  }
}