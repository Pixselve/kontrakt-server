import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateManyWithoutContractInput } from "../inputs/SkillCreateManyWithoutContractInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateInput {
  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  date!: Date;

  @Field(_type => SkillCreateManyWithoutContractInput, {
    nullable: true,
    description: undefined
  })
  skills?: SkillCreateManyWithoutContractInput | null;
}
