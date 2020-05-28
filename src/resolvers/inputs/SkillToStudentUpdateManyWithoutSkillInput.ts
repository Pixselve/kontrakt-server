import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentCreateWithoutSkillInput } from "../inputs/SkillToStudentCreateWithoutSkillInput";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyWithWhereNestedInput } from "../inputs/SkillToStudentUpdateManyWithWhereNestedInput";
import { SkillToStudentUpdateWithWhereUniqueWithoutSkillInput } from "../inputs/SkillToStudentUpdateWithWhereUniqueWithoutSkillInput";
import { SkillToStudentUpsertWithWhereUniqueWithoutSkillInput } from "../inputs/SkillToStudentUpsertWithWhereUniqueWithoutSkillInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithoutSkillInput {
  @TypeGraphQL.Field(_type => [SkillToStudentCreateWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutSkillInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentUpdateWithWhereUniqueWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  update?: SkillToStudentUpdateWithWhereUniqueWithoutSkillInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SkillToStudentUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SkillToStudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentUpsertWithWhereUniqueWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SkillToStudentUpsertWithWhereUniqueWithoutSkillInput[] | null | undefined;
}
