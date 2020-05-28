import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupUpdateManyWithoutContractsInput } from "../inputs/GroupUpdateManyWithoutContractsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateWithoutSkillsDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  end?: Date | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  start?: Date | null | undefined;

  @TypeGraphQL.Field(_type => GroupUpdateManyWithoutContractsInput, {
    nullable: true,
    description: undefined
  })
  groups?: GroupUpdateManyWithoutContractsInput | null | undefined;
}
