import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkUpdateWithoutSkillsToStudentsDataInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  rgb?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  text?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  value?: string | null | undefined;
}
