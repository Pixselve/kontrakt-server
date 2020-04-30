import * as TypeGraphQL from "type-graphql";
import { SkillToStudentUpdateManyWithoutStudentInput } from "../inputs/SkillToStudentUpdateManyWithoutStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  firstName?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | null;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateManyWithoutStudentInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentUpdateManyWithoutStudentInput | null;
}
