import * as TypeGraphQL from "type-graphql";
import { AggregateSkillCountArgs } from "./args/AggregateSkillCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateSkill {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  count(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: AggregateSkillCountArgs
  ) {
    return ctx.prisma.skill.count(args);
  }
}
