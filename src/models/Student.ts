import { Arg, Ctx, Field, Int, ObjectType, } from "type-graphql";
import { Scalars } from "../utils/types";
import { SkillToStudent } from "./SkillToStudent";
import { Group } from "./Group";
import { Context } from "../index";

@ObjectType()
export class Student {
  __typename?: "Student";

  @Field((type) => String)
  firstName!: Scalars["String"];

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  lastName!: Scalars["String"];

  @Field((type) => Int)
  username!: Scalars["Int"];

  @Field(returns => [SkillToStudent])
  async skillsToStudent(
    @Ctx() { prisma }: Context,
    @Arg("markFilter", (returns) => [String], { defaultValue: [] })
      markFilter: string[]
  ): Promise<SkillToStudent[]> {
    let skillsToStudent = await prisma.skillToStudent.findMany({
      where: {
        student: { id: this.id },
        markValue: {
          in: markFilter.length > 0 ? markFilter : undefined,
        },
      },
    });

    if (markFilter.length <= 0 || markFilter.includes("TODO")) {
      //If there is no markFilter or if it includes the TO DO mark, find skills student are concerned in
      const skills = await prisma.skill.findMany({
        where: {
          skillToStudents: {
            none: {
              student: {
                id: this.id,
              },
            },
          },
          contract: {
            groups: {
              some: {
                students: {
                  some: {
                    id: this.id,
                  },
                },
              },
            },
          },
        },
      });

      const skillsToStudentMissing = skills.map((skill) => ({
        markValue: "TODO",
        skillId: skill.id,
        studentId: this.id,
      }));

      skillsToStudent = [...skillsToStudent, ...skillsToStudentMissing];
    }

    return skillsToStudent;
  }

  @Field((type) => [Group])
  async groups(
    @Ctx() { prisma }: Context
  ) {
    return prisma.group.findMany({where: {students: {some: {id: this.id}}}})
  }
}
