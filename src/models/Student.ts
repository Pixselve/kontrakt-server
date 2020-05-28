import { Field, Int, ObjectType } from "type-graphql";
import { SkillToStudent } from "./SkillToStudent";
import { Group } from "./Group";

@ObjectType({
  isAbstract: true,
})
export class Student {
  @Field((_type) => String)
  firstName!: string;

  @Field((_type) => Int)
  id!: number;

  @Field((_type) => String)
  lastName!: string;

  @Field((_type) => Int)
  username!: number;

  skillsToStudent?: SkillToStudent[] | null | undefined;

  groups?: Group[] | null | undefined;
}
