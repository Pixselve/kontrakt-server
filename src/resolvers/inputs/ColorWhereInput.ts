import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { SkillStatusFilter } from "../inputs/SkillStatusFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  rgb?: StringFilter | null;

  @TypeGraphQL.Field(_type => SkillStatusFilter, {
    nullable: true,
    description: undefined
  })
  skillsStatuses?: SkillStatusFilter | null;

  @TypeGraphQL.Field(_type => [ColorWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ColorWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ColorWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ColorWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ColorWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ColorWhereInput[] | null;
}
