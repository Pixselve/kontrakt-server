import * as TypeGraphQL                                from "type-graphql";
import { StudentCreateOneWithoutSkillToStudentsInput } from "../inputs/StudentCreateOneWithoutSkillToStudentsInput";
import { Mark }                                        from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateWithoutSkillInput {
  @TypeGraphQL.Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  mark?: keyof typeof Mark | null;

  @TypeGraphQL.Field(_type => StudentCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  student!: StudentCreateOneWithoutSkillToStudentsInput;
}
