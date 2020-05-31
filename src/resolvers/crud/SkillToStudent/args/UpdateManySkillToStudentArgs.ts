import * as TypeGraphQL from "type-graphql";
import { SkillToStudentUpdateManyMutationInput } from "../../../inputs/SkillToStudentUpdateManyMutationInput";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySkillToStudentArgs {
  @TypeGraphQL.Field((_type) => SkillToStudentUpdateManyMutationInput, {
    nullable: false,
  })
  data!: SkillToStudentUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null | undefined;
}
