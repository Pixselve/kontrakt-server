import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillFilter {
  @Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SkillWhereInput | null;

  @Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillWhereInput | null;

  @Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillWhereInput | null;
}
