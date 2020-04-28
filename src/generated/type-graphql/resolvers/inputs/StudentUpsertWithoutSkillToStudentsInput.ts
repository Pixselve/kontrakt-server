import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentUpdateWithoutSkillToStudentsDataInput } from "../inputs/StudentUpdateWithoutSkillToStudentsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpsertWithoutSkillToStudentsInput {
  @Field(_type => StudentUpdateWithoutSkillToStudentsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StudentUpdateWithoutSkillToStudentsDataInput;

  @Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  create!: StudentCreateWithoutSkillToStudentsInput;
}
