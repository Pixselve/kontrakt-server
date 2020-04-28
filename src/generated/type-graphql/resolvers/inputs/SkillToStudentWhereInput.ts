import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { MarkFilter } from "../inputs/MarkFilter";
import { SkillWhereInput } from "../inputs/SkillWhereInput";
import { StudentWhereInput } from "../inputs/StudentWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentWhereInput {
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => MarkFilter, {
    nullable: true,
    description: undefined
  })
  mark?: MarkFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  skillId?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  studentId?: IntFilter | null;

  @Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillToStudentWhereInput[] | null;

  @Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillToStudentWhereInput[] | null;

  @Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillToStudentWhereInput[] | null;

  @Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillWhereInput | null;

  @Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentWhereInput | null;
}
