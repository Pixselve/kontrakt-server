import * as TypeGraphQL from "type-graphql";
import { ContractCreateManyWithoutGroupsInput } from "../inputs/ContractCreateManyWithoutGroupsInput";
import { StudentCreateManyWithoutGroupsInput } from "../inputs/StudentCreateManyWithoutGroupsInput";
import { IsNotEmpty } from "class-validator";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  @IsNotEmpty()
  name!: string;

  @TypeGraphQL.Field((_type) => ContractCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  contracts?: ContractCreateManyWithoutGroupsInput | null | undefined;

  @TypeGraphQL.Field((_type) => StudentCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  students?: StudentCreateManyWithoutGroupsInput | null | undefined;
}
