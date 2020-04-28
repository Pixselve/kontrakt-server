import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillUpdateManyMutationInput } from "../../../inputs/SkillUpdateManyMutationInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";

@ArgsType()
export class UpdateManySkillArgs {
  @Field(_type => SkillUpdateManyMutationInput, { nullable: false })
  data!: SkillUpdateManyMutationInput;

  @Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null;
}
