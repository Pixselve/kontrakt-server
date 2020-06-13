import { Field, ObjectType } from "type-graphql";
import { Scalars } from "../utils/types";
import { SkillToStudent } from "./SkillToStudent";


@ObjectType()
export class Mark {
  __typename?: "Mark";

  @Field((type) => String)
  rgb!: Scalars["String"];

  @Field((type) => String)
  text!: Scalars["String"];

  @Field((type) => String)
  value!: Scalars["String"];

  @Field((type) => [SkillToStudent])
  skillsToStudents!: Array<SkillToStudent>;

  @Field((type) => String)
  icon!: Scalars["String"];
};
