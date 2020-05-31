import * as TypeGraphQL from "type-graphql";
import { GroupCreateManyWithoutStudentsInput } from "../inputs/GroupCreateManyWithoutStudentsInput";
import { IsNotEmpty } from "class-validator";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  @IsNotEmpty()
  firstName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  @IsNotEmpty()
  lastName!: string;

  @TypeGraphQL.Field((_type) => GroupCreateManyWithoutStudentsInput, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupCreateManyWithoutStudentsInput | null | undefined;
}
