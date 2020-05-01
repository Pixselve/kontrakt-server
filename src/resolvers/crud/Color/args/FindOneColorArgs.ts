import * as TypeGraphQL from "type-graphql";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneColorArgs {
  @TypeGraphQL.Field(_type => ColorWhereUniqueInput, { nullable: false })
  where!: ColorWhereUniqueInput;
}
