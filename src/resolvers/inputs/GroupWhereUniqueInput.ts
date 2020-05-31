import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null | undefined;
}
