import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentUpdateWithoutStudentDataInput } from "../inputs/SkillToStudentUpdateWithoutStudentDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateWithoutStudentDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateWithoutStudentDataInput;
}
