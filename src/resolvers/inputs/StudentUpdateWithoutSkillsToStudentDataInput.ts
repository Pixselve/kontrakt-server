import * as TypeGraphQL from "type-graphql";
import { GroupUpdateManyWithoutStudentsInput } from "../inputs/GroupUpdateManyWithoutStudentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateWithoutSkillsToStudentDataInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  firstName?: string | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  lastName?: string | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  username?: number | null | undefined;

  @TypeGraphQL.Field((_type) => GroupUpdateManyWithoutStudentsInput, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupUpdateManyWithoutStudentsInput | null | undefined;
}
