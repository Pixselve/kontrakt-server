import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillUpdateWithoutSkillToStudentsDataInput } from "../inputs/SkillUpdateWithoutSkillToStudentsDataInput";
import { SkillUpsertWithoutSkillToStudentsInput } from "../inputs/SkillUpsertWithoutSkillToStudentsInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateOneRequiredWithoutSkillToStudentsInput {
  @Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutSkillToStudentsInput | null;

  @Field(_type => SkillWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput | null;

  @Field(_type => SkillUpdateWithoutSkillToStudentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: SkillUpdateWithoutSkillToStudentsDataInput | null;

  @Field(_type => SkillUpsertWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: SkillUpsertWithoutSkillToStudentsInput | null;
}
