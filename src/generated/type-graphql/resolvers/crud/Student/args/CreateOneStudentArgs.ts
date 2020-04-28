import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";

@ArgsType()
export class CreateOneStudentArgs {
  @Field(_type => StudentCreateInput, { nullable: false })
  data!: StudentCreateInput;
}
