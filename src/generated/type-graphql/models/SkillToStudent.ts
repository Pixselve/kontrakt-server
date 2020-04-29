import * as TypeGraphQL from "type-graphql";
import { Skill } from "../models/Skill";
import { Student } from "../models/Student";
import { Mark } from "../enums/Mark";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudent {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Mark, {
    nullable: false,
    description: undefined,
  })
  mark!: keyof typeof Mark;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  skillId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  studentId!: number;

  skill?: Skill;

  student?: Student;
}
