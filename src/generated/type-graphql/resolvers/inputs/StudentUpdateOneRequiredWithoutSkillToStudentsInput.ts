import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentUpdateWithoutSkillToStudentsDataInput } from "../inputs/StudentUpdateWithoutSkillToStudentsDataInput";
import { StudentUpsertWithoutSkillToStudentsInput } from "../inputs/StudentUpsertWithoutSkillToStudentsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateOneRequiredWithoutSkillToStudentsInput {
  @Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutSkillToStudentsInput | null;

  @Field(_type => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput | null;

  @Field(_type => StudentUpdateWithoutSkillToStudentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: StudentUpdateWithoutSkillToStudentsDataInput | null;

  @Field(_type => StudentUpsertWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: StudentUpsertWithoutSkillToStudentsInput | null;
}
