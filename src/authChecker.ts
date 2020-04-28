import { AuthChecker } from "type-graphql";
import { Context }     from "./index";

export const customAuthChecker: AuthChecker<Context> = async (
  { root, args, context, info },
  roles,
) => {

  if (typeof context.user === "undefined") return false;
  if (typeof context.user.email === "undefined") return false;

  return (await context.prisma.teacher.count({ where: { email: context.user.email } })) > 0;
};