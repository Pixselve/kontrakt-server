import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkWhereUniqueInput } from "../../../inputs/MarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMarkArgs {
  @TypeGraphQL.Field(_type => MarkWhereUniqueInput, { nullable: false })
  where!: MarkWhereUniqueInput;
}
