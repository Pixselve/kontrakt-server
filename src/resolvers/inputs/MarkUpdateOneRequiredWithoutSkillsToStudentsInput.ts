import * as TypeGraphQL from "type-graphql";
import { MarkCreateWithoutSkillsToStudentsInput } from "../inputs/MarkCreateWithoutSkillsToStudentsInput";
import { MarkUpdateWithoutSkillsToStudentsDataInput } from "../inputs/MarkUpdateWithoutSkillsToStudentsDataInput";
import { MarkUpsertWithoutSkillsToStudentsInput } from "../inputs/MarkUpsertWithoutSkillsToStudentsInput";
import { MarkWhereUniqueInput } from "../inputs/MarkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkUpdateOneRequiredWithoutSkillsToStudentsInput {
  @TypeGraphQL.Field((_type) => MarkCreateWithoutSkillsToStudentsInput, {
    nullable: true,
    description: undefined,
  })
  create?: MarkCreateWithoutSkillsToStudentsInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  connect?: MarkWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkUpdateWithoutSkillsToStudentsDataInput, {
    nullable: true,
    description: undefined,
  })
  update?: MarkUpdateWithoutSkillsToStudentsDataInput | null | undefined;

  @TypeGraphQL.Field((_type) => MarkUpsertWithoutSkillsToStudentsInput, {
    nullable: true,
    description: undefined,
  })
  upsert?: MarkUpsertWithoutSkillsToStudentsInput | null | undefined;
}
