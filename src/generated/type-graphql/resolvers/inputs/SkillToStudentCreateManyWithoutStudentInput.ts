import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutStudentInput } from "../inputs/SkillToStudentCreateWithoutStudentInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [SkillToStudentCreateWithoutStudentInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutStudentInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null;
}
