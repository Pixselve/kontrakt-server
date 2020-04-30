import * as TypeGraphQL from "type-graphql";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyDataInput } from "../inputs/SkillToStudentUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SkillToStudentScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentScalarWhereInput;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateManyDataInput;
}
