import { Field, Int, ObjectType } from "type-graphql";
import { FixDecorator, Scalars } from "../utils/types";
import { Contract } from "./Contract";
import { SkillToStudent } from "./SkillToStudent";

@ObjectType()
export class Skill {
  __typename?: "Skill";

  @Field((type) => Int)
  contractId!: Scalars["Int"];

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  name!: Scalars["String"];


  contract?: FixDecorator<Contract>;


  skillToStudents?: Array<SkillToStudent>;
}
