import * as TypeGraphQL from "type-graphql";
import { SkillCreateManyWithoutContractInput } from "./SkillCreateManyWithoutContractInput";
import { GroupCreateManyWithoutContractsInput } from "./GroupCreateManyWithoutContractsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: undefined,
  })
  end!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: undefined,
  })
  start!: Date;

  @TypeGraphQL.Field((_type) => SkillCreateManyWithoutContractInput, {
    nullable: true,
    description: undefined,
  })
  skills?: SkillCreateManyWithoutContractInput | null | undefined;

  @TypeGraphQL.Field((_type) => GroupCreateManyWithoutContractsInput, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupCreateManyWithoutContractsInput | null | undefined;
}
