import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  date?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;
}
