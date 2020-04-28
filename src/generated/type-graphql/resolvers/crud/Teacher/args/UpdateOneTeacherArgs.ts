import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherUpdateInput } from "../../../inputs/TeacherUpdateInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@ArgsType()
export class UpdateOneTeacherArgs {
  @Field(_type => TeacherUpdateInput, { nullable: false })
  data!: TeacherUpdateInput;

  @Field(_type => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;
}
