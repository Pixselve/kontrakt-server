import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateManyWithoutStudentInput } from "../inputs/SkillToStudentCreateManyWithoutStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => SkillToStudentCreateManyWithoutStudentInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentCreateManyWithoutStudentInput | null;
}
