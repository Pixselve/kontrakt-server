import * as TypeGraphQL from "type-graphql";
import { SkillToStudent } from "../models/SkillToStudent";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Student {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;

  skillToStudents?: SkillToStudent[] | null;
}
