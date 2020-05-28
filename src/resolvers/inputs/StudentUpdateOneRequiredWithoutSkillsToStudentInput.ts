import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentCreateWithoutSkillsToStudentInput } from "../inputs/StudentCreateWithoutSkillsToStudentInput";
import { StudentUpdateWithoutSkillsToStudentDataInput } from "../inputs/StudentUpdateWithoutSkillsToStudentDataInput";
import { StudentUpsertWithoutSkillsToStudentInput } from "../inputs/StudentUpsertWithoutSkillsToStudentInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateOneRequiredWithoutSkillsToStudentInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutSkillsToStudentInput, {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutSkillsToStudentInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutSkillsToStudentDataInput, {
    nullable: true,
    description: undefined
  })
  update?: StudentUpdateWithoutSkillsToStudentDataInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutSkillsToStudentInput, {
    nullable: true,
    description: undefined
  })
  upsert?: StudentUpsertWithoutSkillsToStudentInput | null | undefined;
}
