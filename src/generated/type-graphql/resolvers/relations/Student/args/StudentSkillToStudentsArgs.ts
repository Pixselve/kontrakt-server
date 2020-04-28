import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentOrderByInput } from "../../../inputs/SkillToStudentOrderByInput";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@ArgsType()
export class StudentSkillToStudentsArgs {
  @Field(_type => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null;

  @Field(_type => SkillToStudentOrderByInput, { nullable: true })
  orderBy?: SkillToStudentOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => SkillToStudentWhereUniqueInput, { nullable: true })
  after?: SkillToStudentWhereUniqueInput | null;

  @Field(_type => SkillToStudentWhereUniqueInput, { nullable: true })
  before?: SkillToStudentWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
