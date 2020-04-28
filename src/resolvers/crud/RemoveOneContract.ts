import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../index";
import { AuthPayload }                  from "../models/AuthPayload";
import { sign }                         from "jsonwebtoken";
import { compare }                      from "bcryptjs";
import { LoginTeacherInput }            from "../inputs/LoginTeacherInput";
import { AuthenticationError }          from 'apollo-server';
import { Contract }                     from "../../generated/type-graphql/models";
import { RemoveOneContractInput }       from "../inputs/RemoveOneContractInput";

@Resolver()
export class RemoveOneContract {
  @Authorized("TEACHER")
  @Mutation(returns => Contract)
  async removeOneContract(@Arg("data") { id }: RemoveOneContractInput, @Ctx() { prisma }: Context): Promise<Contract> {
    // Find the contract
    const contract = await prisma.contract.findOne({ where: { id } });

    if (!contract) throw new Error("ContractNotFound");

    // Find all the skills attached to the contract
    const skills = await prisma.skill.findMany({
      where: {
        contract: {
          id: contract.id
        }
      }
    });
    // Remove all the skillsToStudent attached to the skills
    await Promise.all(skills.map(skill => prisma.skillToStudent.deleteMany({ where: { skill } })));
    // Remove all the skills attached to the contract
    await prisma.skill.deleteMany({ where: { contract: { id: contract.id } } });
    // Remove the contract
    return prisma.contract.delete({ where: { id } });
  }
}