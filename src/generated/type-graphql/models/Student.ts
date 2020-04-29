import * as TypeGraphQL from "type-graphql";
import { SkillToStudent } from "../models/SkillToStudent";

@TypeGraphQL.ObjectType({
})
export class Student {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  lastName!: string;

  skillToStudents?: SkillToStudent[] | null;
}
