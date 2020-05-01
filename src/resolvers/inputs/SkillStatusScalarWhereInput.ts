import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { MarkFilter } from "../inputs/MarkFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [SkillStatusScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillStatusScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillStatusScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillStatusScalarWhereInput[] | null;
}
