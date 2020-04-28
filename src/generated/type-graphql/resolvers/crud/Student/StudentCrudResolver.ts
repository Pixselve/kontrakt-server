import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  FieldResolver,
  Float,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  registerEnumType,
  Authorized
}                                from "type-graphql";
import { CreateOneStudentArgs }  from "./args/CreateOneStudentArgs";
import { DeleteManyStudentArgs } from "./args/DeleteManyStudentArgs";
import { DeleteOneStudentArgs }  from "./args/DeleteOneStudentArgs";
import { FindManyStudentArgs }   from "./args/FindManyStudentArgs";
import { FindOneStudentArgs }    from "./args/FindOneStudentArgs";
import { UpdateManyStudentArgs } from "./args/UpdateManyStudentArgs";
import { UpdateOneStudentArgs }  from "./args/UpdateOneStudentArgs";
import { UpsertOneStudentArgs }  from "./args/UpsertOneStudentArgs";
import { Student }               from "../../../models/Student";
import { BatchPayload }          from "../../outputs/BatchPayload";

@Resolver(_of => Student)
export class StudentCrudResolver {
  @Query(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async student(@Ctx() ctx: any, @Args() args: FindOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.findOne(args);
  }

  @Query(_returns => [Student], {
    nullable: false,
    description: undefined
  })
  async students(@Ctx() ctx: any, @Args() args: FindManyStudentArgs): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }

  @Authorized()
  @Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async createOneStudent(@Ctx() ctx: any, @Args() args: CreateOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.create(args);
  }

  @Authorized()
  @Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async deleteOneStudent(@Ctx() ctx: any, @Args() args: DeleteOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.delete(args);
  }

  @Authorized()
  @Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async updateOneStudent(@Ctx() ctx: any, @Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }

  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudent(@Ctx() ctx: any, @Args() args: DeleteManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.deleteMany(args);
  }

  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudent(@Ctx() ctx: any, @Args() args: UpdateManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.updateMany(args);
  }

  @Authorized()
  @Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async upsertOneStudent(@Ctx() ctx: any, @Args() args: UpsertOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.upsert(args);
  }
}
