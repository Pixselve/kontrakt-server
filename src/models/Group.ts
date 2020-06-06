import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Scalars } from "../utils/types";
import { Contract } from "./Contract";
import { Student } from "./Student";
import { Context } from "../index";

@ObjectType()
export class Group {
  __typename?: "Group";

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  name!: Scalars["String"];

  @Field((type) => [Contract])
  async contracts(@Ctx() { prisma }: Context) {
    return prisma.contract.findMany({
      where: { groups: { some: { id: this.id } } },
    });
  }
  // contracts!: Array<Contract>;

  @Field((type) => [Student])
  async students(@Ctx() { prisma }: Context) {
    return prisma.student.findMany({
      where: {
        groups: {
          some: {
            id: this.id
          }
        }
      }
    })
  }
  // students!: Array<Student>;
}
