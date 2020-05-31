import * as TypeGraphQL from "type-graphql";
import { GroupCreateManyWithoutContractsInput } from "../inputs/GroupCreateManyWithoutContractsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateWithoutSkillsInput {
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

  @TypeGraphQL.Field((_type) => GroupCreateManyWithoutContractsInput, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupCreateManyWithoutContractsInput | null | undefined;
}
