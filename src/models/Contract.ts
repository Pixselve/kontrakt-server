import { Arg, Ctx, Field, Int, ObjectType } from "type-graphql";

import { Scalars } from "../utils/types";
import { Skill } from "./Skill";
import { Group } from "./Group";
import { Context } from "../index";

@ObjectType()
export class Contract {
  __typename?: "Contract";

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  name!: Scalars["String"];

  @Field((type) => Date)
  start!: Scalars["DateTime"];

  @Field((type) => Date)
  end!: Scalars["DateTime"];

  @Field((type) => String)
  rgb!: Scalars["String"];

  @Field((type) => Boolean)
  archived!: Scalars["Boolean"];

  @Field((type) => [Skill])
  // skills!: Array<Skill>;
  async skills(
    @Ctx() { prisma }: Context,
    @Arg("markValues", (returns) => [String], {
      nullable: true,
      defaultValue: undefined,
    })
    markValues: string[]
  ) {
    if (markValues === undefined) {
      return prisma.skill.findMany({ where: { contract: { id: this.id } } });
    } else {
      return prisma.skill.findMany({ where: { contract: { id: this.id }, skillToStudents: {every: {markValue: {in: markValues}}} } });
    }

  }

  @Field((type) => [Group])
  // groups!: Array<Group>;
  async groups(@Ctx() { prisma }: Context) {
    return prisma.group.findMany({
      where: { contracts: { some: { id: this.id } } },
    });
  }
}
