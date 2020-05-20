import { AuthChecker } from "type-graphql";
import { Context } from "../index";
import { Student } from "../resolvers/models";

export const customAuthChecker: AuthChecker<Context> = async (
  { root, args, context, info },
  roles
) => {
  if (context.user && context.user.type) {
    if (
      roles.includes("SELF_STUDENT") &&
      context.user.type === "STUDENT" &&
      info.parentType.name === "Student"
    ) {
      const rootType = root as Student;
      return rootType.id === context.user.student?.id;
    }

    return roles.includes(context.user.type);
  }
  return false;
};
