import * as TypeGraphQL from "type-graphql";
import { ColorOrderByInput } from "../../../inputs/ColorOrderByInput";
import { ColorWhereInput } from "../../../inputs/ColorWhereInput";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyColorArgs {
  @TypeGraphQL.Field(_type => ColorWhereInput, { nullable: true })
  where?: ColorWhereInput | null;

  @TypeGraphQL.Field(_type => ColorOrderByInput, { nullable: true })
  orderBy?: ColorOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => ColorWhereUniqueInput, { nullable: true })
  after?: ColorWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ColorWhereUniqueInput, { nullable: true })
  before?: ColorWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
