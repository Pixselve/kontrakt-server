import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { buildSchema }  from "type-graphql";


import express from "express";
import jwt     from "express-jwt";


import {
  StudentCrudResolver,
  ContractCrudResolver,
  SkillCrudResolver
}                                     from "./generated/type-graphql";
import { CreateOneTeacher }           from "./resolvers/crud/CreateOneTeacher";
import { LoginTeacher }               from "./resolvers/crud/LoginTeacher";
import { CheckIsStudentExists }       from "./resolvers/crud/CheckIsStudentExists";
import { CreateOneContract }          from "./resolvers/crud/CreateOneContract";
import { RemoveOneContract }          from "./resolvers/crud/RemoveOneContract";
import { DeleteStudent }              from "./resolvers/crud/DeleteStudent";
import { EditOrCreateSkillToStudent } from "./resolvers/crud/EditOrCreateSkillToStudent";
import { customAuthChecker }          from "./authChecker";

export interface Context {
  prisma: PrismaClient;
  user: {
    email: string,
    iat: number
  };
}

const prisma = new PrismaClient();
const app = express();


async function main() {
  const schema = await buildSchema({
    resolvers: [StudentCrudResolver, ContractCrudResolver, SkillCrudResolver, CreateOneTeacher, LoginTeacher, CheckIsStudentExists, CreateOneContract, RemoveOneContract, DeleteStudent, EditOrCreateSkillToStudent],
    validate: false,
    authChecker: customAuthChecker
  });


  const server = new ApolloServer({
    schema,
    playground: true,
    // @ts-ignore
    context: ({ req }): Context => ({ prisma, user: req.user }),
  });

  app.use(
    "/",
    jwt({
      secret: "Rne7p$Y*pK^GGJ4j@S7bWZ5y%",
      credentialsRequired: false,
    }),
  );

  server.applyMiddleware({ app, path: "/" });

  await app.listen({ port: process.env.PORT || 4000 });
  console.log(`🚀 Server ready at http://localhost:4000${ server.graphqlPath }`);
}

main().catch(console.error).finally(async () => {
  await prisma.disconnect();
});
