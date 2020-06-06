import { Field, Int, ObjectType } from "type-graphql";

import { Scalars } from "../utils/types";
import { Skill } from "./Skill";
import { Group } from "./Group";

@ObjectType()
export class Contract {
  __typename?: "Contract";

  @Field((type) => Int)
  id!: Scalars["Int"];

  @Field((type) => String)
  name!: Scalars["String"];

  @Field((type) => Date)
  start!: Scalars["DateTime"];

  @Field((type) => Date)
  end!: Scalars["DateTime"];

  @Field((type) => [Skill])
  skills!: Array<Skill>;

  @Field((type) => [Group])
  groups!: Array<Group>;

  @Field((type) => String)
  rgb!: Scalars["String"];

  @Field((type) => Boolean)
  archived!: Scalars["Boolean"];
}
