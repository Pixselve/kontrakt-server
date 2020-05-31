import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutMarkInput } from "../inputs/SkillToStudentCreateWithoutMarkInput";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyWithWhereNestedInput } from "../inputs/SkillToStudentUpdateManyWithWhereNestedInput";
import { SkillToStudentUpdateWithWhereUniqueWithoutMarkInput } from "../inputs/SkillToStudentUpdateWithWhereUniqueWithoutMarkInput";
import { SkillToStudentUpsertWithWhereUniqueWithoutMarkInput } from "../inputs/SkillToStudentUpsertWithWhereUniqueWithoutMarkInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithoutMarkInput {
  @TypeGraphQL.Field((_type) => [SkillToStudentCreateWithoutMarkInput], {
    nullable: true,
    description: undefined,
  })
  create?: SkillToStudentCreateWithoutMarkInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  set?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  disconnect?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  delete?: SkillToStudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [SkillToStudentUpdateWithWhereUniqueWithoutMarkInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  update?:
    | SkillToStudentUpdateWithWhereUniqueWithoutMarkInput[]
    | null
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [SkillToStudentUpdateManyWithWhereNestedInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  updateMany?:
    | SkillToStudentUpdateManyWithWhereNestedInput[]
    | null
    | undefined;

  @TypeGraphQL.Field((_type) => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  deleteMany?: SkillToStudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [SkillToStudentUpsertWithWhereUniqueWithoutMarkInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  upsert?:
    | SkillToStudentUpsertWithWhereUniqueWithoutMarkInput[]
    | null
    | undefined;
}
