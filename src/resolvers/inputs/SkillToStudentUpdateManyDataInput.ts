import * as TypeGraphQL from "type-graphql";
import { Field } from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyDataInput {
  @Field()
  none?: string;
}
