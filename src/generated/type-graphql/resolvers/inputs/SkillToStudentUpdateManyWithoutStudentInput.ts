import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutStudentInput } from "../inputs/SkillToStudentCreateWithoutStudentInput";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyWithWhereNestedInput } from "../inputs/SkillToStudentUpdateManyWithWhereNestedInput";
import { SkillToStudentUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/SkillToStudentUpdateWithWhereUniqueWithoutStudentInput";
import { SkillToStudentUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/SkillToStudentUpsertWithWhereUniqueWithoutStudentInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [SkillToStudentCreateWithoutStudentInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutStudentInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SkillToStudentWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SkillToStudentWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SkillToStudentWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true,
    description: undefined
  })
  update?: SkillToStudentUpdateWithWhereUniqueWithoutStudentInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SkillToStudentUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SkillToStudentScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SkillToStudentUpsertWithWhereUniqueWithoutStudentInput[] | null;
}
