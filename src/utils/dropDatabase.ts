import { PrismaClient } from "@prisma/client";

export const dropDatabase = async () => {
  const prisma = new PrismaClient();
  await prisma.mark.deleteMany({ where: {} });
  await prisma.skillToStudent.deleteMany({ where: {} });
  await prisma.skill.deleteMany({ where: {} });
  await prisma.contract.deleteMany({ where: {} });
  await prisma.group.deleteMany({ where: {} });
  await prisma.student.deleteMany({ where: {} });
  await prisma.teacher.deleteMany({ where: {} });
  await prisma.disconnect();
};
