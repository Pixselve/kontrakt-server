import { Field, InputType, }       from "type-graphql";
import { Mark }                    from "../enums";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { SkillWhereUniqueInput }   from "./SkillWhereUniqueInput";


@InputType({})
export class EditOrCreateSkillToStudentInput {

  @Field(returns => Mark)
  mark!: Mark;

  @Field(returns => StudentWhereUniqueInput)
  student!: StudentWhereUniqueInput;

  @Field(returns => SkillWhereUniqueInput)
  skill!: SkillWhereUniqueInput;
}
