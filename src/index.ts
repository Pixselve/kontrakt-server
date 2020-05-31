import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";

import * as express from "express";
import * as jwt from "express-jwt";
import buildSchema from "./utils/buildSchema";


interface UserTypeTeacher {
  type: "TEACHER"
  teacher: { email: string }
}

interface UserTypeStudent {
  type: "STUDENT"
  student: { id: number }
}

export interface Context {
  prisma: PrismaClient;
  user: UserTypeTeacher | UserTypeStudent
}

const prisma = new PrismaClient();
const app = express();

async function main() {
  const schema = await buildSchema();

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
    })
  );

  server.applyMiddleware({ app, path: "/" });

  await app.listen({ port: process.env.PORT || 4000 });
  console.log(
    `🚀 Server ready at http://localhost:${ process.env.PORT || 4000 }${
      server.graphqlPath
    }`
  );
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.disconnect();
  });
