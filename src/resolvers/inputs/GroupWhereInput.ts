import * as TypeGraphQL from "type-graphql";
import { ContractFilter } from "../inputs/ContractFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentFilter } from "../inputs/StudentFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupWhereInput {
  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
    description: undefined,
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  name?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => ContractFilter, {
    nullable: true,
    description: undefined,
  })
  contracts?: ContractFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StudentFilter, {
    nullable: true,
    description: undefined,
  })
  students?: StudentFilter | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: GroupWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: GroupWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: GroupWhereInput[] | null | undefined;
}
