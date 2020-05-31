import { buildSchema } from "type-graphql";
import { customAuthChecker } from "./authChecker";
import { GraphQLSchema } from "graphql";
import { CreateTeacherResolver } from "../resolvers/crud/Teacher/CreateTeacherResolver";
import { FindOneTeacherResolver } from "../resolvers/crud/Teacher/FindOneTeacherResolver";
import { FindManyTeacherResolver } from "../resolvers/crud/Teacher/FindManyTeacherResolver";
import { DeleteTeacherResolver } from "../resolvers/crud/Teacher/DeleteTeacherResolver";

export default async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      CreateTeacherResolver,
      FindOneTeacherResolver,
      FindManyTeacherResolver,
      DeleteTeacherResolver
    ],
    validate: true,
    authChecker: customAuthChecker,
  });
