import * as TypeGraphQL from "type-graphql";
import { Skill } from "../models/Skill";

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class Contract {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  skills?: Skill[] | null;
}
