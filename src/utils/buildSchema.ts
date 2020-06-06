import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";
import { customAuthChecker } from "./authCheker";

import FindManyGroup from "../resolvers/groups/FindManyGroup.resolver";
import FindManyStudent from "../resolvers/student/FindManyStudent.resolver";
import CreateOneTeacherResolver from "../resolvers/teacher/CreateOneTeacher.resolver";
import DeleteOneTeacherResolver from "../resolvers/teacher/DeleteOneTeacher.resolver";
import LoginTeacherResolver from "../resolvers/teacher/LoginTeacher.resolver";
import FindManyTeacherResolver from "../resolvers/teacher/FindManyTeacher.resolver";
import CreateOneStudentResolver from "../resolvers/student/CreateOneStudent.resolver";

export default async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      CreateOneTeacherResolver,
      DeleteOneTeacherResolver,
      LoginTeacherResolver,
      FindManyTeacherResolver,
      FindManyStudent,
      FindManyGroup,
      CreateOneStudentResolver
    ],
    validate: true,
    authChecker: customAuthChecker,
  });
