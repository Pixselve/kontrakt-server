import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentUpdateManyWithoutMarkInput } from "../inputs/SkillToStudentUpdateManyWithoutMarkInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  rgb?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  text?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  value?: string | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateManyWithoutMarkInput, {
    nullable: true,
    description: undefined
  })
  skillsToStudents?: SkillToStudentUpdateManyWithoutMarkInput | null | undefined;
}
