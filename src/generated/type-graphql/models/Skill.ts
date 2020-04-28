import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Contract } from "../models/Contract";
import { SkillToStudent } from "../models/SkillToStudent";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Skill {
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  skillToStudents?: SkillToStudent[] | null;

  contract?: Contract;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  contractId!: number;
}
