import * as TypeGraphQL from "type-graphql";
import { Student } from "../../../models/Student";
import { AggregateStudent } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Student)
export class AggregateStudentResolver {
  @TypeGraphQL.Query((_returns) => AggregateStudent, {
    nullable: false,
    description: undefined,
  })
  async aggregateStudent(): Promise<AggregateStudent> {
    return new AggregateStudent();
  }
}
