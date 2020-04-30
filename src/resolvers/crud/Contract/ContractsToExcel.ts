import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import { Context }                          from "../../../index";
import { Workbook }                         from "exceljs";

@Resolver()
export class ContractsToExcel {
  @Authorized("TEACHER")
  @Query(returns => String)
  async contractsToExcel(@Ctx() { prisma }: Context): Promise<String> {


    const contracts = await prisma.contract.findMany({
      include: {
        skills: {
          include: {
            skillToStudents: true
          }
        }
      }
    });


    const students = await prisma.student.findMany({
      include: {
        skillToStudents: true
      },
      orderBy: {
        lastName: "asc"
      }
    });


    const skills = await prisma.skill.findMany({
      include: {
        contract: true
      }
    });


    const workbook = new Workbook();
    workbook.creator = 'Kontrakt';
    workbook.created = new Date();


    let startingPoint = 2;


    const worksheet = workbook.addWorksheet("Contracts");

    worksheet.columns = [
      {
        header: "Contracts",
        key: "contract",
        style: {}
      },
      {
        header: "Compétences",
        key: "skill",
        style: {}
      },
      //  Student list
      ...students.map(student => ({
        header: `${ student.lastName.toUpperCase() } ${ student.firstName }`,
        key: student.id.toString(),
        width: 32
      }))
    ];


    worksheet.addRows(skills.map(skill => {
      return [
        skill.contract.date,
        skill.name,
        ...students.map(student => {
          const studentSkillFound = student.skillToStudents.find(skillToStudent => skillToStudent.skillId === skill.id);
          if (studentSkillFound) {
            return studentSkillFound.mark;
          } else {
            return "TODO";
          }
        })
      ];
    }));


    contracts.forEach(contract => {
      worksheet.mergeCells(`A${ startingPoint }:A${ contract.skills.length + startingPoint - 1 }`);
      startingPoint += contract.skills.length;
    });

    // @ts-ignore
    const buffer: Buffer = await workbook.xlsx.writeBuffer();
    const base64 = buffer.toString("base64");
    return `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${ base64 }`;
  }
}