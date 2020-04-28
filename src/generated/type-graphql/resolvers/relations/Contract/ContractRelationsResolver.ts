import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Contract } from "../../../models/Contract";
import { Skill } from "../../../models/Skill";
import { ContractSkillsArgs } from "./args/ContractSkillsArgs";

@Resolver(_of => Contract)
export class ContractRelationsResolver {
  @FieldResolver(_type => [Skill], {
    nullable: true,
    description: undefined,
  })
  async skills(@Root() contract: Contract, @Ctx() ctx: any, @Args() args: ContractSkillsArgs): Promise<Skill[] | null> {
    return ctx.prisma.contract.findOne({
      where: {
        id: contract.id,
      },
    }).skills(args);
  }
}
