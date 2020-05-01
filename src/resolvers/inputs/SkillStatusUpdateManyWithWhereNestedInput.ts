import * as TypeGraphQL from "type-graphql";
import { SkillStatusScalarWhereInput } from "../inputs/SkillStatusScalarWhereInput";
import { SkillStatusUpdateManyDataInput } from "../inputs/SkillStatusUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SkillStatusScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillStatusScalarWhereInput;

  @TypeGraphQL.Field(_type => SkillStatusUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillStatusUpdateManyDataInput;
}
