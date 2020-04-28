import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | null;

  @Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null;

  @Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StudentWhereInput[] | null;

  @Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StudentWhereInput[] | null;

  @Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StudentWhereInput[] | null;
}
