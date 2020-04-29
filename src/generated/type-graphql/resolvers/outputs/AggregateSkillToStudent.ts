import * as TypeGraphQL from "type-graphql";
import { AggregateSkillToStudentCountArgs } from "./args/AggregateSkillToStudentCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateSkillToStudent {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateSkillToStudentCountArgs) {
    return ctx.prisma.skillToStudent.count(args);
  }
}
