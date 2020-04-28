import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/SkillUpdateOneRequiredWithoutSkillToStudentsInput";
import { StudentUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/StudentUpdateOneRequiredWithoutSkillToStudentsInput";
import { Mark } from "../../enums/Mark";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  mark?: keyof typeof Mark | null;

  @Field(_type => SkillUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillUpdateOneRequiredWithoutSkillToStudentsInput | null;

  @Field(_type => StudentUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentUpdateOneRequiredWithoutSkillToStudentsInput | null;
}
