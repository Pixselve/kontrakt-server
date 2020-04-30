import * as TypeGraphQL from "type-graphql";
import { Skill } from "../models/Skill";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Contract {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  skills?: Skill[] | null;
}
