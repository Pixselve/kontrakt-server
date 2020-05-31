import * as TypeGraphQL from "type-graphql";
import {
  MarkOrderByInput,
  MarkWhereInput,
  MarkWhereUniqueInput,
} from "../../inputs";

@TypeGraphQL.ArgsType()
export class AggregateMarkCountArgs {
  @TypeGraphQL.Field((_type) => MarkWhereInput, { nullable: true })
  where?: MarkWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkOrderByInput, { nullable: true })
  orderBy?: MarkOrderByInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field((_type) => MarkWhereUniqueInput, { nullable: true })
  after?: MarkWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkWhereUniqueInput, { nullable: true })
  before?: MarkWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
