import * as TypeGraphQL from "type-graphql";
import { ContractUpdateOneRequiredWithoutSkillsInput } from "../inputs/ContractUpdateOneRequiredWithoutSkillsInput";
import { SkillToStudentUpdateManyWithoutSkillInput } from "../inputs/SkillToStudentUpdateManyWithoutSkillInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => ContractUpdateOneRequiredWithoutSkillsInput, {
    nullable: true,
    description: undefined,
  })
  contract?: ContractUpdateOneRequiredWithoutSkillsInput | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentUpdateManyWithoutSkillInput, {
    nullable: true,
    description: undefined,
  })
  skillToStudents?:
    | SkillToStudentUpdateManyWithoutSkillInput
    | null
    | undefined;
}
