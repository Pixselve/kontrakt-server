import * as TypeGraphQL        from "type-graphql";
import { GroupCreateManyWithoutContractsInput, SkillCreateManyWithoutContractInput } from "../../../inputs";
import { Field, InputType } from "type-graphql";


@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateInput {
  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  end!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  start!: Date;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  skills?: string[];

  @Field(_type => GroupCreateManyWithoutContractsInput, {
    nullable: true,
    description: undefined
  })
  groups?: GroupCreateManyWithoutContractsInput | null | undefined;
}



@TypeGraphQL.ArgsType()
export class CreateOneContractArgs {
  @TypeGraphQL.Field(_type => ContractCreateInput, { nullable: false })
  data!: ContractCreateInput;
}
