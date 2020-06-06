import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Contract } from "../../../models";
import { Context } from "../../../index";
import { ContractCreateInput } from "../../inputs";

@Resolver((_of) => Contract)
export class CreateContractResolver {
  @Authorized("TEACHER")
  @Mutation((_returns) => Contract, {
    nullable: false,
    description: undefined,
  })
  async createContract(
    @Ctx() { prisma }: Context,
    @Arg("data") data: ContractCreateInput
  ): Promise<Contract> {

    const students = await prisma.student.findMany();

    return prisma.contract.create({
      data: {
        name: data.name,
        start: data.start,
        end: data.end,
        //@ts-ignore
        groups: data.groups,
        skills: {
          create: data.skills.create?.map(skillCreate => ({
            name: skillCreate.name, skillToStudents: {
              create: students.map(student => ({
                student: { connect: { id: student.id } },
                mark: { connect: { value: "TODO" } }
              }))
            }
          }))
        }
      }
    });


  }
}
