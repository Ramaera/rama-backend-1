import * as NestJsGraphQL from "@nestjs/graphql";

export enum Membership {
  BASIC = "BASIC",
  USER = "USER"
}
NestJsGraphQL.registerEnumType(Membership, {
  name: "Membership",
  description: undefined,
});
