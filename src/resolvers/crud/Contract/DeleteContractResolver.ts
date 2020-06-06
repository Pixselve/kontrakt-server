import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { DeleteContractArgs } from "./args";
import { Context } from "../../../index";

@TypeGraphQL.Resolver((_of) => Contract)
export class DeleteContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Contract, {
    nullable: true,
    description: undefined,
  })
  async deleteContract(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: DeleteContractArgs
  ): Promise<Contract | null | undefined> {
    //Delete skillToStudent
    await ctx.prisma.skillToStudent.deleteMany({
      where: {
        skill: {
          contract: {
            id: {
              equals: args.where.id ?? undefined
            }
          }
        }
      }
    })

    //Delete skills
    await ctx.prisma.skill.deleteMany({
      where: {
        contractId: {
          equals: args.where.id ?? undefined
        }
      }
    });




    //@ts-ignore
    return ctx.prisma.contract.delete(args);
  }
}
