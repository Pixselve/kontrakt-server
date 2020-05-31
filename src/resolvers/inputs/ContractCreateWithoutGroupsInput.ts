import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillCreateManyWithoutContractInput } from "../inputs/SkillCreateManyWithoutContractInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateWithoutGroupsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  end!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  start!: Date;

  @TypeGraphQL.Field(_type => SkillCreateManyWithoutContractInput, {
    nullable: true,
    description: undefined
  })
  skills?: SkillCreateManyWithoutContractInput | null | undefined;
}
