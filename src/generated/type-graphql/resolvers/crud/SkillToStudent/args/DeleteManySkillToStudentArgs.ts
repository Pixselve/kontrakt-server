import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";

@ArgsType()
export class DeleteManySkillToStudentArgs {
  @Field(_type => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null;
}
