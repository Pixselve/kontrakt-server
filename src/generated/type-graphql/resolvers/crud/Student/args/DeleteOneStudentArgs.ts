import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@ArgsType()
export class DeleteOneStudentArgs {
  @Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;
}
