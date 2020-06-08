import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Scalars } from "../utils/types";
import { Mark } from "./Mark";
import { Skill } from "./Skill";
import { Student } from "./Student";
import { Context } from "../index";

@ObjectType()
export class SkillToStudent {
  __typename?: 'SkillToStudent';

  @Field(type => String)
  markValue!: Scalars['String'];

  @Field(type => Int)
  skillId!: Scalars['Int'];

  @Field(type => Int)
  studentId!: Scalars['Int'];


  @Field(returns => Mark)
  async mark(
    @Ctx() { prisma }: Context
  ) {
    return prisma.mark.findOne({ where: { value: this.markValue } });
  }

  @Field(returns => Skill)
  async skill(
    @Ctx() { prisma }: Context
  ) {
    return prisma.skill.findOne({ where: { id: this.skillId } });
  }

  @Field(returns => Student)
  async student(
    @Ctx() { prisma }: Context
  ) {
    return prisma.student.findOne({ where: { id: this.studentId } });
  }

}
