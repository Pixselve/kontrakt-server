import * as TypeGraphQL from "type-graphql";
import { StudentCreateManyWithoutGroupsInput } from "../inputs/StudentCreateManyWithoutGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateWithoutContractsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => StudentCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  students?: StudentCreateManyWithoutGroupsInput | null | undefined;
}
