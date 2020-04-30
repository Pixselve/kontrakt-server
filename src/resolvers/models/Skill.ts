import * as TypeGraphQL from "type-graphql";
import { Contract } from "../models/Contract";
import { SkillToStudent } from "../models/SkillToStudent";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Skill {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  skillToStudents?: SkillToStudent[] | null;

  contract?: Contract;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  contractId!: number;
}
