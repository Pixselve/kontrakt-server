import * as TypeGraphQL from "type-graphql";

import { ContractSkillsArgs } from "./args";
import { Contract, Skill }    from "../../models";

@TypeGraphQL.Resolver(_of => Contract)
export class ContractRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Skill], {
    nullable: true,
    description: undefined,
  })
  async skills(@TypeGraphQL.Root() contract: Contract, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContractSkillsArgs): Promise<Skill[] | null> {
    return ctx.prisma.contract.findOne({
      where: {
        id: contract.id,
      },
    }).skills(args);
  }
}
