import * as TypeGraphQL from "type-graphql";
import { Skill } from "../../../models/Skill";
import { AggregateSkill } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Skill)
export class AggregateSkillResolver {
  @TypeGraphQL.Query((_returns) => AggregateSkill, {
    nullable: false,
    description: undefined,
  })
  async aggregateSkill(): Promise<AggregateSkill> {
    return new AggregateSkill();
  }
}
