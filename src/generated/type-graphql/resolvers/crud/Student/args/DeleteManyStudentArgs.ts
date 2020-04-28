import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";

@ArgsType()
export class DeleteManyStudentArgs {
  @Field(_type => StudentWhereInput, { nullable: true })
  where?: StudentWhereInput | null;
}
