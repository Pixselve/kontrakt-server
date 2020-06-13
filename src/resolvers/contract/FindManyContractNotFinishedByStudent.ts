import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";

@Resolver(Contract)
export default class FindManyContractNotFinishedByStudent {
  @Query((returns) => [Contract])
  async findManyContractNotFinishedByStudent(
    @Ctx() { prisma }: Context,
    @Arg("studentId", (returns) => Int) studentId: number
  ) {
    return prisma.contract.findMany({
      where: {
        groups: {
          some: {
            students: {
              some: {
                id: studentId,
              },
            },
          },
        },
        OR: [
          {
            skills: {
              some: {
                skillToStudents: {
                  some: {
                    studentId,
                    markValue: {
                      in: ["TODO", "AWAITING_CORRECTION", "TO_FINISH"],
                    },
                  },
                },
              },
            },
          },
          {
            skills: {
              some: {
                skillToStudents: {
                  none: {
                    studentId,
                  },
                },
              },
            },
          },
        ],
      },
    });
  }
}
