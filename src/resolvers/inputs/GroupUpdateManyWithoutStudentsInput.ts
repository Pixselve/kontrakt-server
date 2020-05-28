import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupCreateWithoutStudentsInput } from "../inputs/GroupCreateWithoutStudentsInput";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyWithWhereNestedInput } from "../inputs/GroupUpdateManyWithWhereNestedInput";
import { GroupUpdateWithWhereUniqueWithoutStudentsInput } from "../inputs/GroupUpdateWithWhereUniqueWithoutStudentsInput";
import { GroupUpsertWithWhereUniqueWithoutStudentsInput } from "../inputs/GroupUpsertWithWhereUniqueWithoutStudentsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateManyWithoutStudentsInput {
  @TypeGraphQL.Field(_type => [GroupCreateWithoutStudentsInput], {
    nullable: true,
    description: undefined
  })
  create?: GroupCreateWithoutStudentsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: GroupWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupUpdateWithWhereUniqueWithoutStudentsInput], {
    nullable: true,
    description: undefined
  })
  update?: GroupUpdateWithWhereUniqueWithoutStudentsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: GroupUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: GroupScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [GroupUpsertWithWhereUniqueWithoutStudentsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: GroupUpsertWithWhereUniqueWithoutStudentsInput[] | null | undefined;
}
