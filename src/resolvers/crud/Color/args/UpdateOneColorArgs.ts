import * as TypeGraphQL from "type-graphql";
import { ColorUpdateInput } from "../../../inputs/ColorUpdateInput";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneColorArgs {
  @TypeGraphQL.Field(_type => ColorUpdateInput, { nullable: false })
  data!: ColorUpdateInput;

  @TypeGraphQL.Field(_type => ColorWhereUniqueInput, { nullable: false })
  where!: ColorWhereUniqueInput;
}
