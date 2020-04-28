import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";

@ArgsType()
export class DeleteManyTeacherArgs {
  @Field(_type => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null;
}
