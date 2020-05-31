import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkUpdateManyMutationInput } from "../../../inputs/MarkUpdateManyMutationInput";
import { MarkWhereInput } from "../../../inputs/MarkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMarkArgs {
  @TypeGraphQL.Field(_type => MarkUpdateManyMutationInput, { nullable: false })
  data!: MarkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MarkWhereInput, { nullable: true })
  where?: MarkWhereInput | null | undefined;
}
