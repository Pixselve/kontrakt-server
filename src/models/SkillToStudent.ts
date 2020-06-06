import { Field, Int, ObjectType } from "type-graphql";
import { FixDecorator, Scalars } from "../utils/types";
import { Mark } from "./Mark";
import { Skill } from "./Skill";
import { Student } from "./Student";

@ObjectType()
export class SkillToStudent {
  __typename?: 'SkillToStudent';

  @Field(type => String)
  markValue!: Scalars['String'];

  @Field(type => Int)
  skillId!: Scalars['Int'];

  @Field(type => Int)
  studentId!: Scalars['Int'];


  mark?: FixDecorator<Mark>;


  skill?: FixDecorator<Skill>;


  student?: FixDecorator<Student>;
}
