import * as TypeGraphQL from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyWithWhereNestedInput } from "../inputs/SkillUpdateManyWithWhereNestedInput";
import { SkillUpdateWithWhereUniqueWithoutContractInput } from "../inputs/SkillUpdateWithWhereUniqueWithoutContractInput";
import { SkillUpsertWithWhereUniqueWithoutContractInput } from "../inputs/SkillUpsertWithWhereUniqueWithoutContractInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateManyWithoutContractInput {
  @TypeGraphQL.Field((_type) => [SkillCreateWithoutContractInput], {
    nullable: true,
    description: undefined,
  })
  create?: SkillCreateWithoutContractInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: SkillWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  set?: SkillWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  disconnect?: SkillWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  delete?: SkillWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [SkillUpdateWithWhereUniqueWithoutContractInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  update?: SkillUpdateWithWhereUniqueWithoutContractInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined,
  })
  updateMany?: SkillUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  deleteMany?: SkillScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [SkillUpsertWithWhereUniqueWithoutContractInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  upsert?: SkillUpsertWithWhereUniqueWithoutContractInput[] | null | undefined;
}
