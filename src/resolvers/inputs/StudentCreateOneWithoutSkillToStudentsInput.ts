import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateOneWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutSkillToStudentsInput | null;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput | null;
}
