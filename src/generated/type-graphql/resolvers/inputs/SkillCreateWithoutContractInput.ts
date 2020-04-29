import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateManyWithoutSkillInput } from "../inputs/SkillToStudentCreateManyWithoutSkillInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateWithoutContractInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => SkillToStudentCreateManyWithoutSkillInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentCreateManyWithoutSkillInput | null;
}
