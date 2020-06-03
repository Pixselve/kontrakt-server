import * as TypeGraphQL from "type-graphql";
import { MarkWhereUniqueInput } from "../../../inputs/MarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneMarkArgs {
  @TypeGraphQL.Field((_type) => MarkWhereUniqueInput, { nullable: false })
  where!: MarkWhereUniqueInput;
}