import * as NestJsGraphQL from "@nestjs/graphql";
import { Membership } from "../enums";

@NestJsGraphQL.InputType('NestedEnumMembershipFilter', { isAbstract: true })
export class NestedEnumMembershipFilter {
  @NestJsGraphQL.Field(() => Membership, { nullable: true })
  equals?: "BASIC" | "USER" | undefined;

  @NestJsGraphQL.Field(() => [Membership], { nullable: true })
  in?: Array<"BASIC" | "USER"> | undefined;

  @NestJsGraphQL.Field(() => [Membership], { nullable: true })
  notIn?: Array<"BASIC" | "USER"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMembershipFilter, { nullable: true })
  not?: NestedEnumMembershipFilter | undefined;
}
