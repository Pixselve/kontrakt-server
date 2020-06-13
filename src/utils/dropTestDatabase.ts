import { PrismaClient } from "@prisma/client";

export async function dropTestDatabase() {
  const prisma = new PrismaClient({
    datasources: {
      db: process.env.DATABASE_URL_TEST,
    },
  });
  await prisma.executeRaw(
    `TRUNCATE "Group", "Student", "Contract", "Mark", "SkillToStudent", "Skill", "Teacher" CASCADE`
  );
  await prisma.disconnect();
}
