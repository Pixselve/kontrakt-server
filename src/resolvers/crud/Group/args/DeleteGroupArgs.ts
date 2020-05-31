import * as TypeGraphQL from "type-graphql";
import { GroupWhereUniqueInput } from "../../../inputs/GroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGroupArgs {
  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, { nullable: false })
  where!: GroupWhereUniqueInput;
}
