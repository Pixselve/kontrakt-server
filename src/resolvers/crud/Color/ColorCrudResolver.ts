import * as TypeGraphQL       from "type-graphql";
import { CreateOneColorArgs } from "./args";
import { DeleteOneColorArgs } from "./args";
import { FindManyColorArgs } from "./args";
import { FindOneColorArgs }  from "./args";
import { Color }             from "../../models";

@TypeGraphQL.Resolver(_of => Color)
export class ColorCrudResolver {
  @TypeGraphQL.Query(_returns => Color, {
    nullable: true,
    description: undefined
  })
  async color(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneColorArgs): Promise<Color | null> {
    return ctx.prisma.color.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Color], {
    nullable: false,
    description: undefined
  })
  async colors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyColorArgs): Promise<Color[]> {
    return ctx.prisma.color.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Color, {
    nullable: false,
    description: undefined
  })
  async createOneColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneColorArgs): Promise<Color> {
    return ctx.prisma.color.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Color, {
    nullable: true,
    description: undefined
  })
  async deleteOneColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneColorArgs): Promise<Color | null> {
    return ctx.prisma.color.delete(args);
  }

}
