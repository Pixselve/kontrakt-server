import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutSkillInput } from "../inputs/SkillToStudentCreateWithoutSkillInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateManyWithoutSkillInput {
  @TypeGraphQL.Field(_type => [SkillToStudentCreateWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutSkillInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null;
}
