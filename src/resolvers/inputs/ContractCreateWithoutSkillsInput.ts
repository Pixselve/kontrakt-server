import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateWithoutSkillsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  date!: Date;
}
