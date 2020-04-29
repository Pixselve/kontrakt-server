import * as TypeGraphQL from "type-graphql";
import { SkillUpdateManyWithoutContractInput } from "../inputs/SkillUpdateManyWithoutContractInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  date?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @TypeGraphQL.Field(_type => SkillUpdateManyWithoutContractInput, {
    nullable: true,
    description: undefined
  })
  skills?: SkillUpdateManyWithoutContractInput | null;
}
