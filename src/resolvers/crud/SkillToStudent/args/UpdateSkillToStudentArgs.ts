import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillToStudentUpdateInput } from "../../../inputs/SkillToStudentUpdateInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSkillToStudentArgs {
  @TypeGraphQL.Field(_type => SkillToStudentUpdateInput, { nullable: false })
  data!: SkillToStudentUpdateInput;

  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, { nullable: false })
  where!: SkillToStudentWhereUniqueInput;
}
