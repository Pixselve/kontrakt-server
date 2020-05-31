import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkUpdateInput } from "../../../inputs/MarkUpdateInput";
import { MarkWhereUniqueInput } from "../../../inputs/MarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMarkArgs {
  @TypeGraphQL.Field(_type => MarkUpdateInput, { nullable: false })
  data!: MarkUpdateInput;

  @TypeGraphQL.Field(_type => MarkWhereUniqueInput, { nullable: false })
  where!: MarkWhereUniqueInput;
}
