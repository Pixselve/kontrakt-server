import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateInput } from "../../../inputs/SkillToStudentCreateInput";
import { SkillToStudentUpdateInput } from "../../../inputs/SkillToStudentUpdateInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@ArgsType()
export class UpsertOneSkillToStudentArgs {
  @Field(_type => SkillToStudentWhereUniqueInput, { nullable: false })
  where!: SkillToStudentWhereUniqueInput;

  @Field(_type => SkillToStudentCreateInput, { nullable: false })
  create!: SkillToStudentCreateInput;

  @Field(_type => SkillToStudentUpdateInput, { nullable: false })
  update!: SkillToStudentUpdateInput;
}
