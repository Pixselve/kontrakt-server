import * as TypeGraphQL from "type-graphql";
import { TeacherUpdateManyMutationInput } from "../../../inputs/TeacherUpdateManyMutationInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTeacherArgs {
  @TypeGraphQL.Field((_type) => TeacherUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TeacherUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null | undefined;
}
