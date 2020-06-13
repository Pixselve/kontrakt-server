import { PrismaClient } from "@prisma/client";
import * as faker from "faker";

const prisma = new PrismaClient();

function addDate(date: Date, days: number) {
  return new Date(date.valueOf() + 864e5 * days);
}

async function createOneContract() {
  const startDate = faker.date.recent(50);
  const endDate = faker.date.between(startDate, addDate(startDate, 10));

  await prisma.contract.create({
    data: {
      name: faker.lorem.words(4),
      start: startDate,
      end: endDate,
      rgb: faker.internet.color(),
      skills: {
        create: [
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
          { name: faker.lorem.words(10) },
        ],
      },
    },
  });
}

async function main() {
  prisma.connect();

  await Promise.all([
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
    createOneContract(),
  ]);
  prisma.disconnect();
}

main()
  .then((_) => console.log("DONE"))
  .catch(console.error);
