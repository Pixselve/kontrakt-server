import * as TypeGraphQL from "type-graphql";
import { GroupUpdateWithoutStudentsDataInput } from "../inputs/GroupUpdateWithoutStudentsDataInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateWithWhereUniqueWithoutStudentsInput {
  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GroupUpdateWithoutStudentsDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: GroupUpdateWithoutStudentsDataInput;
}
