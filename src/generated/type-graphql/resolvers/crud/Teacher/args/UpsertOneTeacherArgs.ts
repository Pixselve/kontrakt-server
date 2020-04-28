import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";
import { TeacherUpdateInput } from "../../../inputs/TeacherUpdateInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@ArgsType()
export class UpsertOneTeacherArgs {
  @Field(_type => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;

  @Field(_type => TeacherCreateInput, { nullable: false })
  create!: TeacherCreateInput;

  @Field(_type => TeacherUpdateInput, { nullable: false })
  update!: TeacherUpdateInput;
}
