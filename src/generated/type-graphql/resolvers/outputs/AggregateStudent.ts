import * as TypeGraphQL from "type-graphql";
import { AggregateStudentCountArgs } from "./args/AggregateStudentCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateStudent {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateStudentCountArgs) {
    return ctx.prisma.student.count(args);
  }
}
