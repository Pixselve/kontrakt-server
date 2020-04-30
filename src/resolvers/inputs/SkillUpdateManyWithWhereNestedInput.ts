import * as TypeGraphQL from "type-graphql";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyDataInput } from "../inputs/SkillUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SkillScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillScalarWhereInput;

  @TypeGraphQL.Field(_type => SkillUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillUpdateManyDataInput;
}
