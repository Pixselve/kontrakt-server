import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";

@ArgsType()
export class CreateOneSkillArgs {
  @Field(_type => SkillCreateInput, { nullable: false })
  data!: SkillCreateInput;
}
