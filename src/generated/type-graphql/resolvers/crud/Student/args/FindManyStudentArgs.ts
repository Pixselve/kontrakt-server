import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentOrderByInput } from "../../../inputs/StudentOrderByInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@ArgsType()
export class FindManyStudentArgs {
  @Field(_type => StudentWhereInput, { nullable: true })
  where?: StudentWhereInput | null;

  @Field(_type => StudentOrderByInput, { nullable: true })
  orderBy?: StudentOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => StudentWhereUniqueInput, { nullable: true })
  after?: StudentWhereUniqueInput | null;

  @Field(_type => StudentWhereUniqueInput, { nullable: true })
  before?: StudentWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
