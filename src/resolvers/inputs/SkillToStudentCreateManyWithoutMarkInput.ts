import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentCreateWithoutMarkInput } from "../inputs/SkillToStudentCreateWithoutMarkInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateManyWithoutMarkInput {
  @TypeGraphQL.Field(_type => [SkillToStudentCreateWithoutMarkInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutMarkInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null | undefined;
}
