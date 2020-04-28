import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@ArgsType()
export class DeleteOneSkillArgs {
  @Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
