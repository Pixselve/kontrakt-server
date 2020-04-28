import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";
import { SkillUpdateInput } from "../../../inputs/SkillUpdateInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@ArgsType()
export class UpsertOneSkillArgs {
  @Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;

  @Field(_type => SkillCreateInput, { nullable: false })
  create!: SkillCreateInput;

  @Field(_type => SkillUpdateInput, { nullable: false })
  update!: SkillUpdateInput;
}
