import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TeacherUpdateManyMutationInput } from "../../../inputs/TeacherUpdateManyMutationInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";

@ArgsType()
export class UpdateManyTeacherArgs {
  @Field(_type => TeacherUpdateManyMutationInput, { nullable: false })
  data!: TeacherUpdateManyMutationInput;

  @Field(_type => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null;
}
