import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentUpdateManyMutationInput } from "../../../inputs/StudentUpdateManyMutationInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";

@ArgsType()
export class UpdateManyStudentArgs {
  @Field(_type => StudentUpdateManyMutationInput, { nullable: false })
  data!: StudentUpdateManyMutationInput;

  @Field(_type => StudentWhereInput, { nullable: true })
  where?: StudentWhereInput | null;
}
