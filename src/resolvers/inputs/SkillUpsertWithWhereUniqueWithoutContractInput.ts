import * as TypeGraphQL from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillUpdateWithoutContractDataInput } from "../inputs/SkillUpdateWithoutContractDataInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpsertWithWhereUniqueWithoutContractInput {
  @TypeGraphQL.Field((_type) => SkillWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillUpdateWithoutContractDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: SkillUpdateWithoutContractDataInput;

  @TypeGraphQL.Field((_type) => SkillCreateWithoutContractInput, {
    nullable: false,
    description: undefined,
  })
  create!: SkillCreateWithoutContractInput;
}
