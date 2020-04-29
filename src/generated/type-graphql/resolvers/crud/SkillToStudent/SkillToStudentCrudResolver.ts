import * as TypeGraphQL from "type-graphql";
import { CreateOneSkillToStudentArgs } from "./args/CreateOneSkillToStudentArgs";
import { DeleteManySkillToStudentArgs } from "./args/DeleteManySkillToStudentArgs";
import { DeleteOneSkillToStudentArgs } from "./args/DeleteOneSkillToStudentArgs";
import { FindManySkillToStudentArgs } from "./args/FindManySkillToStudentArgs";
import { FindOneSkillToStudentArgs } from "./args/FindOneSkillToStudentArgs";
import { UpdateManySkillToStudentArgs } from "./args/UpdateManySkillToStudentArgs";
import { UpdateOneSkillToStudentArgs } from "./args/UpdateOneSkillToStudentArgs";
import { UpsertOneSkillToStudentArgs } from "./args/UpsertOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { AggregateSkillToStudent } from "../../outputs/AggregateSkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class SkillToStudentCrudResolver {
  @TypeGraphQL.Query(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async skillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [SkillToStudent], {
    nullable: false,
    description: undefined
  })
  async skillToStudents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySkillToStudentArgs): Promise<SkillToStudent[]> {
    return ctx.prisma.skillToStudent.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async createOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async updateOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSkillToStudent, {
    nullable: false,
    description: undefined
  })
  async aggregateSkillToStudent(): Promise<AggregateSkillToStudent> {
    return new AggregateSkillToStudent();
  }
}
