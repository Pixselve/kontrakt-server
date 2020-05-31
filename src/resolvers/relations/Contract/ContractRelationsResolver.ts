import * as TypeGraphQL from "type-graphql";
import { Contract } from "../../../models/Contract";
import { Group } from "../../../models/Group";
import { Skill } from "../../../models/Skill";
import { ContractGroupsArgs } from "./args/ContractGroupsArgs";
import { ContractSkillsArgs } from "./args/ContractSkillsArgs";

@TypeGraphQL.Resolver(_of => Contract)
export class ContractRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Skill], {
    nullable: true,
    description: undefined,
  })
  async skills(@TypeGraphQL.Root() contract: Contract, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContractSkillsArgs): Promise<Skill[] | null | undefined> {
    return ctx.prisma.contract.findOne({
      where: {
        id: contract.id,
      },
    }).skills(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Group], {
    nullable: true,
    description: undefined,
  })
  async groups(@TypeGraphQL.Root() contract: Contract, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContractGroupsArgs): Promise<Group[] | null | undefined> {
    return ctx.prisma.contract.findOne({
      where: {
        id: contract.id,
      },
    }).groups(args);
  }
}
