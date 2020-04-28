import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyDataInput } from "../inputs/SkillUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateManyWithWhereNestedInput {
  @Field(_type => SkillScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillScalarWhereInput;

  @Field(_type => SkillUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillUpdateManyDataInput;
}
