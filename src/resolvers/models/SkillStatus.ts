import * as TypeGraphQL from "type-graphql";
import { Color }        from "./Color";
import { Mark }         from "../enums";
import { IsNotEmpty }   from "class-validator";

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class SkillStatus {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Mark, {
    nullable: false,
  })
  mark!: keyof typeof Mark;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  @IsNotEmpty()
  text!: string;

  color?: Color;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,

  })
  colorId!: number;
}
