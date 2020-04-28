import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractWhereInput } from "../inputs/ContractWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillWhereInput {
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  contractId?: IntFilter | null;

  @Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillWhereInput[] | null;

  @Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillWhereInput[] | null;

  @Field(_type => [SkillWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillWhereInput[] | null;

  @Field(_type => ContractWhereInput, {
    nullable: true,
    description: undefined
  })
  contract?: ContractWhereInput | null;
}
