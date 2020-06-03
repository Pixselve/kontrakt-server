import * as TypeGraphQL from "type-graphql";
import {
  GroupOrderByInput,
  GroupWhereInput,
  GroupWhereUniqueInput,
} from "../../inputs";

@TypeGraphQL.ArgsType()
export class AggregateGroupCountArgs {
  @TypeGraphQL.Field((_type) => GroupWhereInput, { nullable: true })
  where?: GroupWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => GroupOrderByInput, { nullable: true })
  orderBy?: GroupOrderByInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, { nullable: true })
  after?: GroupWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, { nullable: true })
  before?: GroupWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}