import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillUpdateWithoutSkillToStudentsDataInput } from "../inputs/SkillUpdateWithoutSkillToStudentsDataInput";
import { SkillUpsertWithoutSkillToStudentsInput } from "../inputs/SkillUpsertWithoutSkillToStudentsInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateOneRequiredWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutSkillToStudentsInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateWithoutSkillToStudentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: SkillUpdateWithoutSkillToStudentsDataInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillUpsertWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: SkillUpsertWithoutSkillToStudentsInput | null | undefined;
}
