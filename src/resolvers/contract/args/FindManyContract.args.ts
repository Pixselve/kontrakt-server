import { ArgsType, Field, Int } from "type-graphql";
import { Scalars } from "../../../utils/types";

@ArgsType()
export default class FindManyContractArgs {
  @Field((type) => [Int], { nullable: true, defaultValue: undefined })
  groups?: Scalars["Int"][];


}
