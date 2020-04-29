import * as TypeGraphQL from "type-graphql";
import { CreateOneStudentArgs } from "./args/CreateOneStudentArgs";
import { DeleteManyStudentArgs } from "./args/DeleteManyStudentArgs";
import { DeleteOneStudentArgs } from "./args/DeleteOneStudentArgs";
import { FindManyStudentArgs } from "./args/FindManyStudentArgs";
import { FindOneStudentArgs } from "./args/FindOneStudentArgs";
import { UpdateManyStudentArgs } from "./args/UpdateManyStudentArgs";
import { UpdateOneStudentArgs } from "./args/UpdateOneStudentArgs";
import { UpsertOneStudentArgs } from "./args/UpsertOneStudentArgs";
import { Student } from "../../../models/Student";
import { AggregateStudent } from "../../outputs/AggregateStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Student)
export class StudentCrudResolver {
  @TypeGraphQL.Query(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async student(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Student], {
    nullable: false,
    description: undefined
  })
  async students(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudentArgs): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async createOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async deleteOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async updateOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async upsertOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateStudent, {
    nullable: false,
    description: undefined
  })
  async aggregateStudent(): Promise<AggregateStudent> {
    return new AggregateStudent();
  }
}
