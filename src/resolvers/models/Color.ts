import { SkillStatus }            from "./SkillStatus";
import { Field, Int, ObjectType } from "type-graphql";
import { IsNotEmpty, Matches }    from "class-validator";

@ObjectType({
  isAbstract: true,
})
export class Color {
  @Field(_type => Int, {
    nullable: false,
  })
  id!: number;

  @Field(_type => String, {
    nullable: false,
  })
  @IsNotEmpty()
  name!: string;

  @Field(_type => String, {
    nullable: false,
  })
  @Matches(/^(?:[0-9a-fA-F]{3}){1,2}$/g)
  rgb!: string;

  skillsStatuses?: SkillStatus[] | null;
}
