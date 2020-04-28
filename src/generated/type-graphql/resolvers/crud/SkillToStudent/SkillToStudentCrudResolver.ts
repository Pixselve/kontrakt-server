import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneSkillToStudentArgs } from "./args/CreateOneSkillToStudentArgs";
import { DeleteManySkillToStudentArgs } from "./args/DeleteManySkillToStudentArgs";
import { DeleteOneSkillToStudentArgs } from "./args/DeleteOneSkillToStudentArgs";
import { FindManySkillToStudentArgs } from "./args/FindManySkillToStudentArgs";
import { FindOneSkillToStudentArgs } from "./args/FindOneSkillToStudentArgs";
import { UpdateManySkillToStudentArgs } from "./args/UpdateManySkillToStudentArgs";
import { UpdateOneSkillToStudentArgs } from "./args/UpdateOneSkillToStudentArgs";
import { UpsertOneSkillToStudentArgs } from "./args/UpsertOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => SkillToStudent)
export class SkillToStudentCrudResolver {
  @Query(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async skillToStudent(@Ctx() ctx: any, @Args() args: FindOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.findOne(args);
  }

  @Query(_returns => [SkillToStudent], {
    nullable: false,
    description: undefined
  })
  async skillToStudents(@Ctx() ctx: any, @Args() args: FindManySkillToStudentArgs): Promise<SkillToStudent[]> {
    return ctx.prisma.skillToStudent.findMany(args);
  }

  @Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async createOneSkillToStudent(@Ctx() ctx: any, @Args() args: CreateOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }

  @Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkillToStudent(@Ctx() ctx: any, @Args() args: DeleteOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.delete(args);
  }

  @Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async updateOneSkillToStudent(@Ctx() ctx: any, @Args() args: UpdateOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkillToStudent(@Ctx() ctx: any, @Args() args: DeleteManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkillToStudent(@Ctx() ctx: any, @Args() args: UpdateManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.updateMany(args);
  }

  @Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkillToStudent(@Ctx() ctx: any, @Args() args: UpsertOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }
}
