import * as TypeGraphQL from "type-graphql";
import { CreateOneTeacherArgs } from "./args/CreateOneTeacherArgs";
import { DeleteManyTeacherArgs } from "./args/DeleteManyTeacherArgs";
import { DeleteOneTeacherArgs } from "./args/DeleteOneTeacherArgs";
import { FindManyTeacherArgs } from "./args/FindManyTeacherArgs";
import { FindOneTeacherArgs } from "./args/FindOneTeacherArgs";
import { UpdateManyTeacherArgs } from "./args/UpdateManyTeacherArgs";
import { UpdateOneTeacherArgs } from "./args/UpdateOneTeacherArgs";
import { UpsertOneTeacherArgs } from "./args/UpsertOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { AggregateTeacher } from "../../outputs/AggregateTeacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Teacher)
export class TeacherCrudResolver {
  @TypeGraphQL.Query(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async teacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Teacher], {
    nullable: false,
    description: undefined
  })
  async teachers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTeacherArgs): Promise<Teacher[]> {
    return ctx.prisma.teacher.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async createOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async deleteOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async updateOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async upsertOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTeacher, {
    nullable: false,
    description: undefined
  })
  async aggregateTeacher(): Promise<AggregateTeacher> {
    return new AggregateTeacher();
  }
}
