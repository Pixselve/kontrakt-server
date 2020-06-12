import {
  Arg,
  ArgumentValidationError,
  Ctx,
  Mutation,
  Resolver,
} from "type-graphql";
import { Context } from "../../index";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { Workbook } from "exceljs";
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  validateOrReject,
} from "class-validator";
import { Student } from "../../models/Student";

class NewStudent {
  @IsInt()
  @IsPositive()
  rowIndex!: number;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;
}

@Resolver()
export default class CreateManyStudentCSVResolver {
  @Mutation((returns) => [Student])
  async createManyStudentCSV(
    @Ctx() { prisma }: Context,
    @Arg("file", (returns) => GraphQLUpload)
    { createReadStream, filename }: FileUpload
  ) {
    if (!/^.+\.csv$/g.test(filename)) throw new Error("NotCSV");

    const workbook = new Workbook();
    const students: NewStudent[] = [];
    await workbook.csv.read(createReadStream());
    const worksheet = workbook.worksheets[0];

    // Extract students details
    worksheet.eachRow(async (row, rowNumber) => {
      if (rowNumber === 1) return;
      let student = new NewStudent();
      student.firstName = row.getCell(1).value as string;
      student.lastName = row.getCell(2).value as string;
      student.rowIndex = rowNumber;
      students.push(student);
    });

    //  Validate student details
    try {
      await Promise.all(students.map((student) => validateOrReject(student)));
    } catch (e) {
      throw new ArgumentValidationError(e);
    }

    // Create each student
    // 1. Generate all usernames
    // 1.1 Get all existing usernames into a Set
    const existingStudents = await prisma.student.findMany({
      select: { username: true },
    });
    const existingStudentsUsernameSet: Set<number> = new Set(
      existingStudents.map((existingStudent) => existingStudent.username)
    );
    // 1.2 Generate a new set of new unique usernames for the new students
    let newStudentsUsernameSet: Set<number> = new Set();
    let tries = 0;
    let maxTries = 500;
    while (
      newStudentsUsernameSet.size !== students.length &&
      tries < maxTries
    ) {
      let username = generateSixDigitNumber();
      while (
        existingStudentsUsernameSet.has(username) &&
        newStudentsUsernameSet.has(username) &&
        tries < maxTries
      ) {
        tries++;
        username = generateSixDigitNumber();
      }
      newStudentsUsernameSet.add(username);
    }
    if (tries >= maxTries) throw new Error("UsernameGenerationOverflow");
    // 2. Insert students into the database
    const newStudentsUsernameArray: number[] = [...newStudentsUsernameSet];
    // Return all the newly created students

    return await Promise.all(
      students.map((student, index) =>
        prisma.student.create({
          data: {
            firstName: student.firstName,
            lastName: student.lastName,
            username: newStudentsUsernameArray[index],
          },
        })
      )
    );
  }
}

function generateSixDigitNumber(): number {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}
