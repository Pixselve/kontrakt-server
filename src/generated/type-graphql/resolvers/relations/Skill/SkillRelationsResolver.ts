import * as TypeGraphQL from "type-graphql";
import { Contract } from "../../../models/Contract";
import { Skill } from "../../../models/Skill";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { SkillSkillToStudentsArgs } from "./args/SkillSkillToStudentsArgs";

@TypeGraphQL.Resolver(_of => Skill)
export class SkillRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillToStudents(@TypeGraphQL.Root() skill: Skill, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SkillSkillToStudentsArgs): Promise<SkillToStudent[] | null> {
    return ctx.prisma.skill.findOne({
      where: {
        id: skill.id,
      },
    }).skillToStudents(args);
  }

  @TypeGraphQL.FieldResolver(_type => Contract, {
    nullable: false,
    description: undefined,
  })
  async contract(@TypeGraphQL.Root() skill: Skill, @TypeGraphQL.Ctx() ctx: any): Promise<Contract> {
    return ctx.prisma.skill.findOne({
      where: {
        id: skill.id,
      },
    }).contract({});
  }
}
