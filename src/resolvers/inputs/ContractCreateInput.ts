import * as TypeGraphQL from "type-graphql";
import { SkillCreateManyWithoutContractInput } from "../inputs/SkillCreateManyWithoutContractInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  date!: Date;

  @TypeGraphQL.Field(_type => SkillCreateManyWithoutContractInput, {
    nullable: true,
    description: undefined
  })
  skills?: SkillCreateManyWithoutContractInput | null;
}
