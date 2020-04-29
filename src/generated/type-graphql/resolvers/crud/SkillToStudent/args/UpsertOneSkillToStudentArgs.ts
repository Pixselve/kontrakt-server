import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateInput } from "../../../inputs/SkillToStudentCreateInput";
import { SkillToStudentUpdateInput } from "../../../inputs/SkillToStudentUpdateInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSkillToStudentArgs {
  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, { nullable: false })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillToStudentCreateInput, { nullable: false })
  create!: SkillToStudentCreateInput;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateInput, { nullable: false })
  update!: SkillToStudentUpdateInput;
}
