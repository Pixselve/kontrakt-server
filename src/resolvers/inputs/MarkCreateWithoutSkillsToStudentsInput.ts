import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkCreateWithoutSkillsToStudentsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  rgb!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  text!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  value!: string;
}
