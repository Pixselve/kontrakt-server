import { buildSchema } from "type-graphql";
import { customAuthChecker } from "./authChecker";
import { GraphQLSchema } from "graphql";
import { CreateTeacherResolver } from "../resolvers/crud/Teacher/CreateTeacherResolver";
import { FindOneTeacherResolver } from "../resolvers/crud/Teacher/FindOneTeacherResolver";
import { FindManyTeacherResolver } from "../resolvers/crud/Teacher/FindManyTeacherResolver";
import { DeleteTeacherResolver } from "../resolvers/crud/Teacher/DeleteTeacherResolver";
import { LoginStudentResolver } from "../resolvers/crud/Student/LoginStudentResolver";
import { LoginTeacherResolver } from "../resolvers/crud/Teacher/LoginTeacherResolver";
import { FindManyStudentResolver } from "../resolvers/crud/Student/FindManyStudentResolver";
import { FindOneStudentResolver } from "../resolvers/crud/Student/FindOneStudentResolver";
import { FindManyContractResolver } from "../resolvers/crud/Contract/FindManyContractResolver";
import { FindOneContractResolver } from "../resolvers/crud/Contract/FindOneContractResolver";
import { CreateStudentResolver } from "../resolvers/crud/Student/CreateStudentResolver";
import { CreateContractResolver } from "../resolvers/crud/Contract/CreateContractResolver";
import { DeleteContractResolver } from "../resolvers/crud/Contract/DeleteContractResolver";
import { DeleteStudentResolver } from "../resolvers/crud/Student/DeleteStudentResolver";
import { UpsertSkillToStudentResolver } from "../resolvers/crud/SkillToStudent/UpsertSkillToStudentResolver";
import { DeleteSkillResolver } from "../resolvers/crud/Skill/DeleteSkillResolver";
import { UpdateSkillResolver } from "../resolvers/crud/Skill/UpdateSkillResolver";
import { CreateSkillResolver } from "../resolvers/crud/Skill/CreateSkillResolver";
import {
  ContractRelationsResolver,
  SkillToStudentRelationsResolver,
  StudentRelationsResolver,
} from "../resolvers/relations";
import { MeResolver } from "../resolvers/crud/User/Me.resolver";
import { CreateGroupResolver } from "../resolvers/crud/Group/CreateGroupResolver";
import { FindManyGroupResolver } from "../resolvers/crud/Group/FindManyGroupResolver";
import { UpdateContractResolver } from "../resolvers/crud/Contract/UpdateContractResolver";
import { UpdateStudentResolver } from "../resolvers/crud/Student/UpdateStudentResolver";

export default async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      CreateTeacherResolver,
      FindOneTeacherResolver,
      FindManyTeacherResolver,
      DeleteTeacherResolver,
      LoginStudentResolver,
      LoginTeacherResolver,
      FindManyStudentResolver,
      FindOneStudentResolver,
      StudentRelationsResolver,
      ContractRelationsResolver,
      FindManyContractResolver,
      FindOneContractResolver,
      CreateStudentResolver,
      CreateContractResolver,
      DeleteContractResolver,
      DeleteStudentResolver,
      UpsertSkillToStudentResolver,
      DeleteSkillResolver,
      UpdateSkillResolver,
      CreateSkillResolver,
      SkillToStudentRelationsResolver,
      MeResolver,
      CreateGroupResolver,
      FindManyGroupResolver,
      UpdateContractResolver,
      UpdateStudentResolver
    ],
    validate: true,
    authChecker: customAuthChecker,
  });
