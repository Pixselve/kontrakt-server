import {
  Field,
  InputType,
}                                   from "type-graphql";
import { IsAlpha, Length, IsEmail } from "class-validator";
import {
  SkillToStudentWhereUniqueInput, SkillWhereUniqueInput,
  StudentWhereUniqueInput
}                                   from "../../generated/type-graphql/resolvers/inputs";
import { Mark }                     from "../../generated/type-graphql/enums";

@InputType({})
export class EditOrCreateSkillToStudentInput {

  @Field(returns => Mark)
  mark!: Mark;

  @Field(returns => StudentWhereUniqueInput)
  student!: StudentWhereUniqueInput;

  @Field(returns => SkillWhereUniqueInput)
  skill!: SkillWhereUniqueInput;
}
