import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateOneWithoutSkillsInput } from "../inputs/ContractCreateOneWithoutSkillsInput";
import { SkillToStudentCreateManyWithoutSkillInput } from "../inputs/SkillToStudentCreateManyWithoutSkillInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => SkillToStudentCreateManyWithoutSkillInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentCreateManyWithoutSkillInput | null;

  @Field(_type => ContractCreateOneWithoutSkillsInput, {
    nullable: false,
    description: undefined
  })
  contract!: ContractCreateOneWithoutSkillsInput;
}
