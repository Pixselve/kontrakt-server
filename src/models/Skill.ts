import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Scalars } from "../utils/types";
import { Contract } from "./Contract";
import { SkillToStudent } from "./SkillToStudent";
import { Context } from "../index";

@ObjectType()
export class Skill {
  __typename?: "Skill";

  @Field((type) => Int)
  contractId!: Scalars["Int"];

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  name!: Scalars["String"];

  @Field(returns => Contract)
  async contract(
    @Ctx() { prisma }: Context
  ) {
    return prisma.skill.findOne({ where: { id: this.id } }).contract();
  }


  @Field(returns => [SkillToStudent])
  async skillToStudents(
    @Ctx() { prisma }: Context
  ) {
    return prisma.skillToStudent.findMany({
      where: {
        skill: {
          id: this.id
        }
      }
    });
  }
}
