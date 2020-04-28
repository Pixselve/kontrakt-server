import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentUpdateInput } from "../../../inputs/SkillToStudentUpdateInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@ArgsType()
export class UpdateOneSkillToStudentArgs {
  @Field(_type => SkillToStudentUpdateInput, { nullable: false })
  data!: SkillToStudentUpdateInput;

  @Field(_type => SkillToStudentWhereUniqueInput, { nullable: false })
  where!: SkillToStudentWhereUniqueInput;
}
