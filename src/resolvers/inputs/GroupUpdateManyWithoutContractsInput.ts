import * as TypeGraphQL from "type-graphql";
import { GroupCreateWithoutContractsInput } from "../inputs/GroupCreateWithoutContractsInput";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyWithWhereNestedInput } from "../inputs/GroupUpdateManyWithWhereNestedInput";
import { GroupUpdateWithWhereUniqueWithoutContractsInput } from "../inputs/GroupUpdateWithWhereUniqueWithoutContractsInput";
import { GroupUpsertWithWhereUniqueWithoutContractsInput } from "../inputs/GroupUpsertWithWhereUniqueWithoutContractsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateManyWithoutContractsInput {
  @TypeGraphQL.Field((_type) => [GroupCreateWithoutContractsInput], {
    nullable: true,
    description: undefined,
  })
  create?: GroupCreateWithoutContractsInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  set?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  disconnect?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  delete?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [GroupUpdateWithWhereUniqueWithoutContractsInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  update?: GroupUpdateWithWhereUniqueWithoutContractsInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined,
  })
  updateMany?: GroupUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  deleteMany?: GroupScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(
    (_type) => [GroupUpsertWithWhereUniqueWithoutContractsInput],
    {
      nullable: true,
      description: undefined,
    }
  )
  upsert?: GroupUpsertWithWhereUniqueWithoutContractsInput[] | null | undefined;
}
