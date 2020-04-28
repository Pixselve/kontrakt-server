import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentUpdateManyMutationInput } from "../../../inputs/SkillToStudentUpdateManyMutationInput";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";

@ArgsType()
export class UpdateManySkillToStudentArgs {
  @Field(_type => SkillToStudentUpdateManyMutationInput, { nullable: false })
  data!: SkillToStudentUpdateManyMutationInput;

  @Field(_type => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null;
}
