import * as TypeGraphQL from "type-graphql";
import { MarkWhereInput } from "../../../inputs/MarkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMarkArgs {
  @TypeGraphQL.Field((_type) => MarkWhereInput, { nullable: true })
  where?: MarkWhereInput | null | undefined;
}
