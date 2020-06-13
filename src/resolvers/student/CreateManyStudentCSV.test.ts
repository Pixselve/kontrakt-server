import { IsNotEmpty, IsString, validate, validateOrReject } from "class-validator";

class NewStudent {
  @IsString()
  @IsNotEmpty()
  firstName!: string | null;

  @IsString()
  @IsNotEmpty()
  lastName!: string | null;
}

describe("CreateManyStudentCSV", () => {
  it("reject null lastName", async ( cb) => {
    let student = new NewStudent();
    student.firstName = "Mael";
    student.lastName = null;
    try {
      await validateOrReject(student);
      cb("Validated")
    } catch (e) {
      cb()
    }


  });
});
