import * as TypeGraphQL from "type-graphql";
import { Mark }         from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusCreateWithoutColorInput {
  @TypeGraphQL.Field(_type => Mark, {
    nullable: false,
    description: undefined
  })
  mark!: keyof typeof Mark;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  text!: string;
}
