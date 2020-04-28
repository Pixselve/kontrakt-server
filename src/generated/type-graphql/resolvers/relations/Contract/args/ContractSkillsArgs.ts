import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillOrderByInput } from "../../../inputs/SkillOrderByInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@ArgsType()
export class ContractSkillsArgs {
  @Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null;

  @Field(_type => SkillOrderByInput, { nullable: true })
  orderBy?: SkillOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => SkillWhereUniqueInput, { nullable: true })
  after?: SkillWhereUniqueInput | null;

  @Field(_type => SkillWhereUniqueInput, { nullable: true })
  before?: SkillWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
