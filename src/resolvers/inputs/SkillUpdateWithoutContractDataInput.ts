import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentUpdateManyWithoutSkillInput } from "../inputs/SkillToStudentUpdateManyWithoutSkillInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateWithoutContractDataInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateManyWithoutSkillInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentUpdateManyWithoutSkillInput | null | undefined;
}
