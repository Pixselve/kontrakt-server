import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentUpdateWithoutSkillToStudentsDataInput } from "../inputs/StudentUpdateWithoutSkillToStudentsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpsertWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutSkillToStudentsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StudentUpdateWithoutSkillToStudentsDataInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  create!: StudentCreateWithoutSkillToStudentsInput;
}
