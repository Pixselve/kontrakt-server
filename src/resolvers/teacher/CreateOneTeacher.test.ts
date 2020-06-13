import "reflect-metadata";
import { dropTestDatabase } from "../../utils/dropTestDatabase";
import { gCall } from "../../utils/gCall";

const createOneTeacherMutationGQL = `
mutation($email: String!, $password: String!) {
  createOneTeacher(teacher: {email: $email, password: $password}) {
    email
    password
  }
}`;

beforeAll(async () => {
  await dropTestDatabase();
});

describe("CreateOneTeacherResolver", () => {
  it("Don't create because the request is not authenticated", async () => {
    const response = await gCall({
      source: createOneTeacherMutationGQL,
      variableValues: {
        email: "email@email.com",
        password: "password",
      },
    });
    expect(response.data).toBeNull();
    expect(response.errors).toHaveLength(1);
  });

  it("bad email format", async () => {
    const response = await gCall({
      source: createOneTeacherMutationGQL,
      variableValues: {
        email: "zd",
        password: "password",
      },
      user: {
        type: "TEACHER",
        teacher: {
          email: "email@email.com",
        },
      },
    });

    expect(response.data).toBeNull();
    expect(response.errors).toHaveLength(1);
  });
});
