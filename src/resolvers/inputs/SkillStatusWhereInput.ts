import * as TypeGraphQL from "type-graphql";
import { ColorWhereInput } from "../inputs/ColorWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { MarkFilter } from "../inputs/MarkFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => MarkFilter, {
    nullable: true,
    description: undefined
  })
  mark?: MarkFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  text?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  colorId?: IntFilter | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillStatusWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillStatusWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillStatusWhereInput[] | null;

  @TypeGraphQL.Field(_type => ColorWhereInput, {
    nullable: true,
    description: undefined
  })
  color?: ColorWhereInput | null;
}
