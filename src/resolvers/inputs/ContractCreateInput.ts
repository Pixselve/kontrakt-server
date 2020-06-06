import * as TypeGraphQL from "type-graphql";
import { SkillCreateManyWithoutContractInput } from "./SkillCreateManyWithoutContractInput";
import { GroupCreateManyWithoutContractsInput } from "./GroupCreateManyWithoutContractsInput";
import { IsDate, IsNotEmpty } from "class-validator";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: undefined,
  })
  @IsDate()
  end!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  @IsNotEmpty()
  name!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: undefined,
  })
  @IsDate()
  start!: Date;

  @TypeGraphQL.Field((_type) => SkillCreateManyWithoutContractInput, {
    description: undefined,
  })
  skills!: SkillCreateManyWithoutContractInput;

  @TypeGraphQL.Field((_type) => GroupCreateManyWithoutContractsInput, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupCreateManyWithoutContractsInput | null | undefined;
}
