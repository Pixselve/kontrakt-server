import * as TypeGraphQL from "type-graphql";
import { GroupWhereInput } from "../../../inputs/GroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGroupArgs {
  @TypeGraphQL.Field((_type) => GroupWhereInput, { nullable: true })
  where?: GroupWhereInput | null | undefined;
}
