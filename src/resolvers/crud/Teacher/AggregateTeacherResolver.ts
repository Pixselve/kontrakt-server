import * as TypeGraphQL from "type-graphql";
import { Teacher } from "../../../models/Teacher";
import { AggregateTeacher } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Teacher)
export class AggregateTeacherResolver {
  @TypeGraphQL.Query((_returns) => AggregateTeacher, {
    nullable: false,
    description: undefined,
  })
  async aggregateTeacher(): Promise<AggregateTeacher> {
    return new AggregateTeacher();
  }
}
