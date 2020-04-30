import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SkillFilter } from "../inputs/SkillFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractWhereInput {
  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  date?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => SkillFilter, {
    nullable: true,
    description: undefined
  })
  skills?: SkillFilter | null;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContractWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContractWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContractWhereInput[] | null;
}
