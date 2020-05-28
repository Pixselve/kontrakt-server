import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateOneWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutSkillToStudentsInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput | null | undefined;
}
