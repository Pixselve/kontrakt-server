import * as TypeGraphQL from "type-graphql";
import {
  SkillOrderByInput,
  SkillWhereInput,
  SkillWhereUniqueInput,
} from "../../inputs";

@TypeGraphQL.ArgsType()
export class AggregateSkillCountArgs {
  @TypeGraphQL.Field((_type) => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => SkillOrderByInput, { nullable: true })
  orderBy?: SkillOrderByInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field((_type) => SkillWhereUniqueInput, { nullable: true })
  after?: SkillWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => SkillWhereUniqueInput, { nullable: true })
  before?: SkillWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
