import * as TypeGraphQL from "type-graphql";
import { SkillUpdateWithoutContractDataInput } from "../inputs/SkillUpdateWithoutContractDataInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateWithWhereUniqueWithoutContractInput {
  @TypeGraphQL.Field((_type) => SkillWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillUpdateWithoutContractDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: SkillUpdateWithoutContractDataInput;
}
