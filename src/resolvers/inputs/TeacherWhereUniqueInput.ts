import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TeacherWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  email?: string | null | undefined;
}
