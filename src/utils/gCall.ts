import { graphql, GraphQLSchema } from "graphql";
import { Maybe } from "type-graphql";
import buildSchema from "../utils/buildSchema";
import { PrismaClient } from "@prisma/client";
import { Context } from "../index";

interface Options {
  source: string;
  variableValues?: Maybe<{ [p: string]: any }>;
  user?: {
    type: "TEACHER" | "STUDENT";
    teacher?: { email: string };
    student?: { id: number };
  };
}

let schema: GraphQLSchema;
let prisma: PrismaClient;

export const gCall = async ({ source, variableValues, user }: Options) => {
  if (!schema) {
    schema = await buildSchema();
  }
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      user,
      prisma,
    } as Context,
  });
};
