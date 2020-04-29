import * as TypeGraphQL from "type-graphql";
import { SkillCreateOneWithoutSkillToStudentsInput } from "../inputs/SkillCreateOneWithoutSkillToStudentsInput";
import { Mark } from "../../enums/Mark";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateWithoutStudentInput {
  @TypeGraphQL.Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  mark?: keyof typeof Mark | null;

  @TypeGraphQL.Field(_type => SkillCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  skill!: SkillCreateOneWithoutSkillToStudentsInput;
}
