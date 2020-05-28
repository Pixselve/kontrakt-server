import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupCreateManyWithoutStudentsInput } from "../inputs/GroupCreateManyWithoutStudentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateWithoutSkillsToStudentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  username!: number;

  @TypeGraphQL.Field(_type => GroupCreateManyWithoutStudentsInput, {
    nullable: true,
    description: undefined
  })
  groups?: GroupCreateManyWithoutStudentsInput | null | undefined;
}
