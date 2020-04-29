import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Teacher {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  password!: string;
}
