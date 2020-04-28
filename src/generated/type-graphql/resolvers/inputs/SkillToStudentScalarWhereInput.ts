import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { MarkFilter } from "../inputs/MarkFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentScalarWhereInput {
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

  @Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillToStudentScalarWhereInput[] | null;

  @Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillToStudentScalarWhereInput[] | null;

  @Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillToStudentScalarWhereInput[] | null;
}
