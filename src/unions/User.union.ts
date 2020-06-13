import { createUnionType } from "type-graphql";
import { Teacher } from "../models/Teacher";
import { Student } from "../models/Student";

export const UserUnion = createUnionType({
  name: "User",
  types: () => [Teacher, Student] as const,
  resolveType: value => {
    if ("email" in value) {
      return Teacher;
    }
    if ("username" in value) {
      return Student;
    }
    return undefined;
  }
});
