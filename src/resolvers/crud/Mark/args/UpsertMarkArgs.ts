import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkCreateInput } from "../../../inputs/MarkCreateInput";
import { MarkUpdateInput } from "../../../inputs/MarkUpdateInput";
import { MarkWhereUniqueInput } from "../../../inputs/MarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMarkArgs {
  @TypeGraphQL.Field(_type => MarkWhereUniqueInput, { nullable: false })
  where!: MarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarkCreateInput, { nullable: false })
  create!: MarkCreateInput;

  @TypeGraphQL.Field(_type => MarkUpdateInput, { nullable: false })
  update!: MarkUpdateInput;
}
