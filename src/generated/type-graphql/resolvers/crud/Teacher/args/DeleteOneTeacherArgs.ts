import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@ArgsType()
export class DeleteOneTeacherArgs {
  @Field(_type => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;
}
