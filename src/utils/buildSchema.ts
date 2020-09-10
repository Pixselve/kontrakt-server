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
import UpdateOneStudentResolver from "../resolvers/student/UpdateOneStudent.resolver";
import UpdateOneContractResolver from "../resolvers/contract/UpdateOneContract.resolver";
import CreateOneGroupResolver from "../resolvers/groups/CreateOneGroup.resolver";
import CreateOneSkillResolver from "../resolvers/skill/CreateOneSkill.resolver";
import DeleteOneSkillResolver from "../resolvers/skill/DeleteOneSkill.resolver";
import UpdateOneSkillResolver from "../resolvers/skill/UpdateOneSkill.resolver";
import LoginStudentResolver from "../resolvers/student/LoginStudent.resolver";
import CreateOneContractResolver from "../resolvers/contract/CreateOneContract.resolver";
import DeleteOneContractResolver from "../resolvers/contract/DeleteOneContract.resolver";
import DeleteOneStudentResolver from "../resolvers/student/DeleteOneStudent.resolver";
import UpsertOneSkillToStudentResolver from "../resolvers/skillToStudent/UpsertOneSkillToStudent.resolver";
import FindManyMarkResolver from "../resolvers/mark/FindManyMark.resolver";
import FindManyContractResolver from "../resolvers/contract/FindManyContract.resolver";
import FindOneContractResolver from "../resolvers/contract/FindOneContract.resolver";
import FindOneStudentResolver from "../resolvers/student/FindOneStudent.resolver";
import MeResolver from "../resolvers/user/Me.resolver";
import FindManyContractNotFinishedByStudent from "../resolvers/contract/FindManyContractNotFinishedByStudent";
import CreateManyStudentCSVResolver from "../resolvers/student/CreateManyStudentCSV.resolver";
import StatusResolver from "../resolvers/status";

export default async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      CreateOneTeacherResolver,
      DeleteOneTeacherResolver,
      LoginTeacherResolver,
      FindManyTeacherResolver,
      FindManyStudent,
      FindManyGroup,
      CreateOneStudentResolver,
      UpdateOneStudentResolver,
      UpdateOneContractResolver,
      CreateOneGroupResolver,
      CreateOneSkillResolver,
      DeleteOneSkillResolver,
      UpdateOneSkillResolver,
      LoginStudentResolver,
      CreateOneContractResolver,
      DeleteOneContractResolver,
      DeleteOneStudentResolver,
      UpsertOneSkillToStudentResolver,
      FindManyMarkResolver,
      FindManyContractResolver,
      FindOneContractResolver,
      FindOneStudentResolver,
      MeResolver,
      FindManyContractNotFinishedByStudent,
      CreateManyStudentCSVResolver,
      StatusResolver
    ],
    validate: true,
    authChecker: customAuthChecker,
  });
