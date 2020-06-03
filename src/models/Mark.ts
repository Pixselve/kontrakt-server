import { Field, ObjectType } from "type-graphql";
import { SkillToStudent } from "./SkillToStudent";

@ObjectType({
  isAbstract: true,
})
export class Mark {
  @Field((_type) => String)
  rgb!: string;

  @Field((_type) => String)
  text!: string;

  @Field((_type) => String)
  value!: string;

  @Field((_type) => String)
  icon!: string;

  skillsToStudents?: SkillToStudent[] | null | undefined;
}
