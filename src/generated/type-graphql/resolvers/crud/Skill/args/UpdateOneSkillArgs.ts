import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillUpdateInput } from "../../../inputs/SkillUpdateInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@ArgsType()
export class UpdateOneSkillArgs {
  @Field(_type => SkillUpdateInput, { nullable: false })
  data!: SkillUpdateInput;

  @Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
