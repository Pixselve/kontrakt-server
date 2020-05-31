import * as TypeGraphQL from "type-graphql";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TeacherWhereInput {
  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  email?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  password?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => [TeacherWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: TeacherWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [TeacherWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: TeacherWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [TeacherWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: TeacherWhereInput[] | null | undefined;
}
