import { Workbook }     from "exceljs";
import { PrismaClient } from "@prisma/client";

const app = async () => {

  const prisma = new PrismaClient();

  const contracts = await prisma.contract.findMany({
    include: {
      skills: {
        include: {
          skillToStudents: true
        }
      }
    },
    orderBy: {
      date: "desc"
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
    },
    orderBy: {
      contract: "desc"
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


  await workbook.xlsx.writeFile("workbook.xlsx");


};


app().catch(console.error).then(data => console.log("Done !"));