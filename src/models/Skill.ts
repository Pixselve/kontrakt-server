import { Field, Int, ObjectType } from "type-graphql";
import { Contract } from "./Contract";
import { SkillToStudent } from "./SkillToStudent";

@ObjectType({
  isAbstract: true,
})
export class Skill {
  @Field((_type) => Int, {})
  contractId!: number;

  @Field((_type) => Int, {})
  id!: number;

  @Field((_type) => String, {})
  name!: string;

  contract?: Contract;

  skillToStudents?: SkillToStudent[] | null | undefined;
}
