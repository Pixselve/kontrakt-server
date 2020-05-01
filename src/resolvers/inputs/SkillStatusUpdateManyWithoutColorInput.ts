import * as TypeGraphQL from "type-graphql";
import { SkillStatusCreateWithoutColorInput } from "../inputs/SkillStatusCreateWithoutColorInput";
import { SkillStatusScalarWhereInput } from "../inputs/SkillStatusScalarWhereInput";
import { SkillStatusUpdateManyWithWhereNestedInput } from "../inputs/SkillStatusUpdateManyWithWhereNestedInput";
import { SkillStatusUpdateWithWhereUniqueWithoutColorInput } from "../inputs/SkillStatusUpdateWithWhereUniqueWithoutColorInput";
import { SkillStatusUpsertWithWhereUniqueWithoutColorInput } from "../inputs/SkillStatusUpsertWithWhereUniqueWithoutColorInput";
import { SkillStatusWhereUniqueInput } from "../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusUpdateManyWithoutColorInput {
  @TypeGraphQL.Field(_type => [SkillStatusCreateWithoutColorInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillStatusCreateWithoutColorInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillStatusWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SkillStatusWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SkillStatusWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SkillStatusWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusUpdateWithWhereUniqueWithoutColorInput], {
    nullable: true,
    description: undefined
  })
  update?: SkillStatusUpdateWithWhereUniqueWithoutColorInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SkillStatusUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SkillStatusScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusUpsertWithWhereUniqueWithoutColorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SkillStatusUpsertWithWhereUniqueWithoutColorInput[] | null;
}
