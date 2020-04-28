import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateInput } from "../../../inputs/SkillToStudentCreateInput";

@ArgsType()
export class CreateOneSkillToStudentArgs {
  @Field(_type => SkillToStudentCreateInput, { nullable: false })
  data!: SkillToStudentCreateInput;
}
