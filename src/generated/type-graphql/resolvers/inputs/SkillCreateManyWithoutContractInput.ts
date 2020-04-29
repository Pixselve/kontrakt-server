import * as TypeGraphQL from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateManyWithoutContractInput {
  @TypeGraphQL.Field(_type => [SkillCreateWithoutContractInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutContractInput[] | null;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput[] | null;
}
