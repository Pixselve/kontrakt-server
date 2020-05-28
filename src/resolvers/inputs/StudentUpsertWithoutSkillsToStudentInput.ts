import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentCreateWithoutSkillsToStudentInput } from "../inputs/StudentCreateWithoutSkillsToStudentInput";
import { StudentUpdateWithoutSkillsToStudentDataInput } from "../inputs/StudentUpdateWithoutSkillsToStudentDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpsertWithoutSkillsToStudentInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutSkillsToStudentDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StudentUpdateWithoutSkillsToStudentDataInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutSkillsToStudentInput, {
    nullable: false,
    description: undefined
  })
  create!: StudentCreateWithoutSkillsToStudentInput;
}
