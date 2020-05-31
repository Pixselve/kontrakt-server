import * as TypeGraphQL from "type-graphql";
import { GroupCreateWithoutStudentsInput } from "../inputs/GroupCreateWithoutStudentsInput";
import { GroupUpdateWithoutStudentsDataInput } from "../inputs/GroupUpdateWithoutStudentsDataInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpsertWithWhereUniqueWithoutStudentsInput {
  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GroupUpdateWithoutStudentsDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: GroupUpdateWithoutStudentsDataInput;

  @TypeGraphQL.Field((_type) => GroupCreateWithoutStudentsInput, {
    nullable: false,
    description: undefined,
  })
  create!: GroupCreateWithoutStudentsInput;
}
