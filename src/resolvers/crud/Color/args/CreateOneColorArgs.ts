import * as TypeGraphQL from "type-graphql";
import { ColorCreateInput } from "../../../inputs/ColorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneColorArgs {
  @TypeGraphQL.Field(_type => ColorCreateInput, { nullable: false })
  data!: ColorCreateInput;
}
