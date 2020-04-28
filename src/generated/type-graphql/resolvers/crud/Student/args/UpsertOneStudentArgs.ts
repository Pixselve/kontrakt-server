import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";
import { StudentUpdateInput } from "../../../inputs/StudentUpdateInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@ArgsType()
export class UpsertOneStudentArgs {
  @Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;

  @Field(_type => StudentCreateInput, { nullable: false })
  create!: StudentCreateInput;

  @Field(_type => StudentUpdateInput, { nullable: false })
  update!: StudentUpdateInput;
}
