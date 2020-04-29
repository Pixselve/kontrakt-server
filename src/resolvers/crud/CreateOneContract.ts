import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../index";
import { CreateOneContractInput }                   from "../inputs/CreateOneContractInput";
import { Contract }                                 from "../../generated/type-graphql/models";

@Resolver()
export class CreateOneContract {
  @Authorized("TEACHER")
  @Mutation(returns => Contract)
  async createOneContract(@Arg("data") data: CreateOneContractInput, @Ctx() { prisma }: Context): Promise<Contract> {
    //Reset date hour
    const dateWithoutHour: Date = new Date(new Date(data.date).setHours(0, 0, 0, 0));

    // Check if a contract with this date already exists
    const alreadyExistsContract = await prisma.contract.findMany({ where: { date: dateWithoutHour } });
    if (alreadyExistsContract.length > 0) throw new Error("ContractWithDateAlreadyExists");

    return prisma.contract.create({
      data: {
        date: dateWithoutHour,
        skills: {
          create: data.skills.map(skill => ({ name: skill }))
        }
      }
    });


  }
}

