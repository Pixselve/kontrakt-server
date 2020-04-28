import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractUpdateOneRequiredWithoutSkillsInput } from "../inputs/ContractUpdateOneRequiredWithoutSkillsInput";
import { SkillToStudentUpdateManyWithoutSkillInput } from "../inputs/SkillToStudentUpdateManyWithoutSkillInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => SkillToStudentUpdateManyWithoutSkillInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentUpdateManyWithoutSkillInput | null;

  @Field(_type => ContractUpdateOneRequiredWithoutSkillsInput, {
    nullable: true,
    description: undefined
  })
  contract?: ContractUpdateOneRequiredWithoutSkillsInput | null;
}
