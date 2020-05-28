import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractWhereInput } from "../inputs/ContractWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  contractId?: IntFilter | null | undefined;

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

  @TypeGraphQL.Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => ContractWhereInput, {
    nullable: true,
    description: undefined
  })
  contract?: ContractWhereInput | null | undefined;
}
