import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
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
  create?: SkillCreateWithoutContractInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput[] | null | undefined;
}
