import { Authorized, Field, Int, ObjectType } from "type-graphql";
import { SkillToStudent } from "./SkillToStudent";
import { IsInt, IsNotEmpty, IsPositive, Max, Min } from "class-validator";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Student {
  @Authorized(["TEACHER", "SELF_STUDENT"])
  @Field(returns => Int)
  id!: number;

  @Field()
  @IsNotEmpty()
  firstName!: string;

  @Authorized(["TEACHER", "SELF_STUDENT"])
  @Field()
  @IsNotEmpty()
  lastName!: string;

  @Field(returns => Int)
  @IsInt()
  @IsPositive()
  @Min(100000)
  @Max(999999)
  @Authorized(["TEACHER", "SELF_STUDENT"])
  username!: number;

  skillToStudents?: SkillToStudent[] | null;
}
