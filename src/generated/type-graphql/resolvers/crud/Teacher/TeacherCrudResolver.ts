import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTeacherArgs } from "./args/CreateOneTeacherArgs";
import { DeleteManyTeacherArgs } from "./args/DeleteManyTeacherArgs";
import { DeleteOneTeacherArgs } from "./args/DeleteOneTeacherArgs";
import { FindManyTeacherArgs } from "./args/FindManyTeacherArgs";
import { FindOneTeacherArgs } from "./args/FindOneTeacherArgs";
import { UpdateManyTeacherArgs } from "./args/UpdateManyTeacherArgs";
import { UpdateOneTeacherArgs } from "./args/UpdateOneTeacherArgs";
import { UpsertOneTeacherArgs } from "./args/UpsertOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Teacher)
export class TeacherCrudResolver {
  @Query(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async teacher(@Ctx() ctx: any, @Args() args: FindOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.findOne(args);
  }

  @Query(_returns => [Teacher], {
    nullable: false,
    description: undefined
  })
  async teachers(@Ctx() ctx: any, @Args() args: FindManyTeacherArgs): Promise<Teacher[]> {
    return ctx.prisma.teacher.findMany(args);
  }

  @Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async createOneTeacher(@Ctx() ctx: any, @Args() args: CreateOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.create(args);
  }

  @Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async deleteOneTeacher(@Ctx() ctx: any, @Args() args: DeleteOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.delete(args);
  }

  @Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async updateOneTeacher(@Ctx() ctx: any, @Args() args: UpdateOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTeacher(@Ctx() ctx: any, @Args() args: DeleteManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTeacher(@Ctx() ctx: any, @Args() args: UpdateManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.updateMany(args);
  }

  @Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async upsertOneTeacher(@Ctx() ctx: any, @Args() args: UpsertOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.upsert(args);
  }
}
