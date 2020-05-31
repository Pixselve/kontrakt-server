import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkCreateInput } from "../../../inputs/MarkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMarkArgs {
  @TypeGraphQL.Field(_type => MarkCreateInput, { nullable: false })
  data!: MarkCreateInput;
}
