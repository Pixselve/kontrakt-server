import * as TypeGraphQL from "type-graphql";
import { SkillUpdateManyWithoutContractInput } from "../inputs/SkillUpdateManyWithoutContractInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateWithoutGroupsDataInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
    description: undefined,
  })
  end?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
    description: undefined,
  })
  start?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => SkillUpdateManyWithoutContractInput, {
    nullable: true,
    description: undefined,
  })
  skills?: SkillUpdateManyWithoutContractInput | null | undefined;
}
