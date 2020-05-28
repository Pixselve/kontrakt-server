import { Field, ObjectType } from "type-graphql";

@ObjectType({
  isAbstract: true,
})
export class Teacher {
  @Field((_type) => String)
  email!: string;

  @Field((_type) => String)
  password!: string;
}
