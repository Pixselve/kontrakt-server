import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GroupFilter } from "../inputs/GroupFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SkillFilter } from "../inputs/SkillFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractWhereInput {
  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  end?: DateTimeFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  start?: DateTimeFilter | null | undefined;

  @TypeGraphQL.Field(_type => SkillFilter, {
    nullable: true,
    description: undefined
  })
  skills?: SkillFilter | null | undefined;

  @TypeGraphQL.Field(_type => GroupFilter, {
    nullable: true,
    description: undefined
  })
  groups?: GroupFilter | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContractWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContractWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContractWhereInput[] | null | undefined;
}
