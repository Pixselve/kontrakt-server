import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupCreateWithoutStudentsInput } from "../inputs/GroupCreateWithoutStudentsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateManyWithoutStudentsInput {
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
}
