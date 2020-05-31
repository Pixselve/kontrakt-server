import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  value?: string | null | undefined;
}
