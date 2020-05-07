import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { buildSchema }  from "type-graphql";


import express from "express";
import jwt     from "express-jwt";


import { CreateOneTeacher }           from "./resolvers/crud/Teacher/CreateOneTeacher";
import { LoginTeacher }               from "./resolvers/crud/Teacher/LoginTeacher";
import { CheckIsStudentExists }       from "./resolvers/crud/Student/CheckIsStudentExists";
import { CreateOneContract }          from "./resolvers/crud/Contract/CreateOneContract";
import { RemoveOneContract }          from "./resolvers/crud/Contract/RemoveOneContract";
import { DeleteStudent }              from "./resolvers/crud/Student/DeleteStudent";
import { EditOrCreateSkillToStudent } from "./resolvers/crud/SkillToStudent/EditOrCreateSkillToStudent";
import { customAuthChecker }          from "./authChecker";
import { ContractsToExcel }           from "./resolvers/crud/Contract/ContractsToExcel";

import { ContractCrudResolver } from "./resolvers/crud/Contract/ContractCrudResolver";
import { SkillCrudResolver }    from "./resolvers/crud/Skill/SkillCrudResolver";

import { StudentCrudResolver }                                                         from "./resolvers/crud/Student/StudentCrudResolver";
import { ContractRelationsResolver, SkillRelationsResolver, StudentRelationsResolver } from "./resolvers/relations";
import { SkillStatusCrudResolver }                                                     from "./resolvers/crud/SkillStatus/SkillStatusCrudResolver";
import { ColorCrudResolver }                                                           from "./resolvers/crud/Color/ColorCrudResolver";
import { ColorRelationsResolver }                                                      from "./resolvers/relations/Color/ColorRelationsResolver";
import { SkillStatusRelationsResolver }                                                from "./resolvers/relations/SkillStatus/SkillStatusRelationsResolver";

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
    resolvers: [SkillStatusRelationsResolver, ColorRelationsResolver, ColorCrudResolver, SkillStatusCrudResolver, StudentRelationsResolver, ContractRelationsResolver, SkillRelationsResolver, StudentCrudResolver, ContractCrudResolver, SkillCrudResolver, CreateOneTeacher, LoginTeacher, CheckIsStudentExists, CreateOneContract, RemoveOneContract, DeleteStudent, EditOrCreateSkillToStudent, ContractsToExcel],
    validate: false,
    authChecker: customAuthChecker
  });

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV === "dev",
    introspection: process.env.NODE_ENV === "dev",
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
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${ server.graphqlPath }`);
}

main().catch(console.error).finally(async () => {
  await prisma.disconnect();
});
