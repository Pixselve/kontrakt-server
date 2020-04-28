import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";

@ArgsType()
export class CreateOneTeacherArgs {
  @Field(_type => TeacherCreateInput, { nullable: false })
  data!: TeacherCreateInput;
}
