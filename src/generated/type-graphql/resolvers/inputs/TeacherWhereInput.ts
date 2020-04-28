import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TeacherWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  password?: StringFilter | null;

  @Field(_type => [TeacherWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TeacherWhereInput[] | null;

  @Field(_type => [TeacherWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TeacherWhereInput[] | null;

  @Field(_type => [TeacherWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TeacherWhereInput[] | null;
}
