import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateWithoutSkillsDataInput {
  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  date?: Date | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;
}
