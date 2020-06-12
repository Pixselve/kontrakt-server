import { Field, InputType, Int } from "type-graphql";
import { IsAlphanumeric, IsInt, IsNotEmpty, IsPositive } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class UpsertOneSkillToStudentInput {
  @Field((type) => Int)
  @IsPositive()
  skillId!: Scalars["Int"];

  @Field((type) => Int)
  @IsPositive()
  studentId!: Scalars["Int"];

  @Field((type) => String)
  @IsNotEmpty()
  markValue!: Scalars["String"];
}
