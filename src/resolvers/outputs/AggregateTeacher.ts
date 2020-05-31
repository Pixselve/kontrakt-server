import * as TypeGraphQL from "type-graphql";
import { AggregateTeacherCountArgs } from "./args/AggregateTeacherCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateTeacher {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  count(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: AggregateTeacherCountArgs
  ) {
    return ctx.prisma.teacher.count(args);
  }
}
