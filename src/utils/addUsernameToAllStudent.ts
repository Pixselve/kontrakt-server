import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const studentsWithNoUsername = await prisma.student.findMany({ where: { username: null } });
  for (const student of studentsWithNoUsername) {

    let username;
    let alreadyUsedUsername;
    do {
      username = generateRandomSixDigitNumber();
      alreadyUsedUsername = await prisma.student.findMany({ where: { username } });
    } while (alreadyUsedUsername.length > 0);
    await prisma.student.update({ where: { id: student.id }, data: { username } });
  }
};


const generateRandomSixDigitNumber = () => Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);


main().then(console.log).catch(console.error);
