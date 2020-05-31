import * as TypeGraphQL from "type-graphql";
import { MarkCreateWithoutSkillsToStudentsInput } from "../inputs/MarkCreateWithoutSkillsToStudentsInput";
import { MarkWhereUniqueInput } from "../inputs/MarkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkCreateOneWithoutSkillsToStudentsInput {
  @TypeGraphQL.Field((_type) => MarkCreateWithoutSkillsToStudentsInput, {
    nullable: true,
    description: undefined,
  })
  create?: MarkCreateWithoutSkillsToStudentsInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  connect?: MarkWhereUniqueInput | null | undefined;
}
