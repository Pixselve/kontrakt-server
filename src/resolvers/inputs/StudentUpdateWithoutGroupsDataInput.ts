import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentUpdateManyWithoutStudentInput } from "../inputs/SkillToStudentUpdateManyWithoutStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateWithoutGroupsDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  firstName?: string | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  username?: number | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateManyWithoutStudentInput, {
    nullable: true,
    description: undefined
  })
  skillsToStudent?: SkillToStudentUpdateManyWithoutStudentInput | null | undefined;
}
