import * as TypeGraphQL from "type-graphql";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyDataInput } from "../inputs/GroupUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field((_type) => GroupScalarWhereInput, {
    nullable: false,
    description: undefined,
  })
  where!: GroupScalarWhereInput;

  @TypeGraphQL.Field((_type) => GroupUpdateManyDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: GroupUpdateManyDataInput;
}
