import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Contract } from "../../../models/Contract";
import { Skill } from "../../../models/Skill";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { SkillSkillToStudentsArgs } from "./args/SkillSkillToStudentsArgs";

@Resolver(_of => Skill)
export class SkillRelationsResolver {
  @FieldResolver(_type => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillToStudents(@Root() skill: Skill, @Ctx() ctx: any, @Args() args: SkillSkillToStudentsArgs): Promise<SkillToStudent[] | null> {
    return ctx.prisma.skill.findOne({
      where: {
        id: skill.id,
      },
    }).skillToStudents(args);
  }

  @FieldResolver(_type => Contract, {
    nullable: false,
    description: undefined,
  })
  async contract(@Root() skill: Skill, @Ctx() ctx: any): Promise<Contract> {
    return ctx.prisma.skill.findOne({
      where: {
        id: skill.id,
      },
    }).contract({});
  }
}
