import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateOneWithoutSkillToStudentsInput } from "../inputs/SkillCreateOneWithoutSkillToStudentsInput";
import { StudentCreateOneWithoutSkillToStudentsInput } from "../inputs/StudentCreateOneWithoutSkillToStudentsInput";
import { Mark } from "../../enums/Mark";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateInput {
  @Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  mark?: keyof typeof Mark | null;

  @Field(_type => SkillCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  skill!: SkillCreateOneWithoutSkillToStudentsInput;

  @Field(_type => StudentCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  student!: StudentCreateOneWithoutSkillToStudentsInput;
}
