import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentCreateManyWithoutMarkInput } from "../inputs/SkillToStudentCreateManyWithoutMarkInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  rgb!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  text!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  value!: string;

  @TypeGraphQL.Field(_type => SkillToStudentCreateManyWithoutMarkInput, {
    nullable: true,
    description: undefined
  })
  skillsToStudents?: SkillToStudentCreateManyWithoutMarkInput | null | undefined;
}
