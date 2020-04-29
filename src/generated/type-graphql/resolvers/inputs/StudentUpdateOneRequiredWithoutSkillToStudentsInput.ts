import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentUpdateWithoutSkillToStudentsDataInput } from "../inputs/StudentUpdateWithoutSkillToStudentsDataInput";
import { StudentUpsertWithoutSkillToStudentsInput } from "../inputs/StudentUpsertWithoutSkillToStudentsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateOneRequiredWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutSkillToStudentsInput | null;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutSkillToStudentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: StudentUpdateWithoutSkillToStudentsDataInput | null;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: StudentUpsertWithoutSkillToStudentsInput | null;
}
