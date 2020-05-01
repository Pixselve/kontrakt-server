import * as TypeGraphQL from "type-graphql";
import { ColorWhereInput } from "../../../inputs/ColorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyColorArgs {
  @TypeGraphQL.Field(_type => ColorWhereInput, { nullable: true })
  where?: ColorWhereInput | null;
}
