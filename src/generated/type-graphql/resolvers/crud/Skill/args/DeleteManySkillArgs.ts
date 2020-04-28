import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";

@ArgsType()
export class DeleteManySkillArgs {
  @Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null;
}
