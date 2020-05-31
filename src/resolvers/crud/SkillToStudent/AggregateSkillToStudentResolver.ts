import * as TypeGraphQL from "type-graphql";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { AggregateSkillToStudent } from "../../outputs/AggregateSkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class AggregateSkillToStudentResolver {
  @TypeGraphQL.Query(_returns => AggregateSkillToStudent, {
    nullable: false,
    description: undefined
  })
  async aggregateSkillToStudent(): Promise<AggregateSkillToStudent> {
    return new AggregateSkillToStudent();
  }
}
