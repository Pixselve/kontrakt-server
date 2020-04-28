import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherOrderByInput } from "../../../inputs/TeacherOrderByInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@ArgsType()
export class FindManyTeacherArgs {
  @Field(_type => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null;

  @Field(_type => TeacherOrderByInput, { nullable: true })
  orderBy?: TeacherOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => TeacherWhereUniqueInput, { nullable: true })
  after?: TeacherWhereUniqueInput | null;

  @Field(_type => TeacherWhereUniqueInput, { nullable: true })
  before?: TeacherWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
