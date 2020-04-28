import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SkillFilter } from "../inputs/SkillFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractWhereInput {
  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  date?: DateTimeFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => SkillFilter, {
    nullable: true,
    description: undefined
  })
  skills?: SkillFilter | null;

  @Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContractWhereInput[] | null;

  @Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContractWhereInput[] | null;

  @Field(_type => [ContractWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContractWhereInput[] | null;
}
