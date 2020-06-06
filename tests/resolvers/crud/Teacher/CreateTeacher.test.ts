import { dropDatabase } from "../../../../src/utils/dropDatabase";
import { gCall } from "../../../../src/test-utils/gCall";

const createTeacherMutation = `
    mutation CreateTeacher($createTeacherData: TeacherCreateInput!) {
        createTeacher(data: $createTeacherData) {
            email
            password

        }
    }
`;

beforeAll(async () => {
  await dropDatabase();
});

describe("CreateTeacherResolver", () => {
  it("not logged in", async () => {
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "password",
        },
      },
    });

    expect(response.data).toBeNull();
    expect(response.errors).toHaveLength(1);
  });

  it("bad email format", async () => {
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "zd",
          password: "password",
        },
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
  it("password is empty", async () => {
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "",
        },
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
  it("password length is less than 3", async () => {
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "12",
        },
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

  it("create the teacher", async () => {
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "password",
        },
      },
      user: {
        type: "TEACHER",
        teacher: {
          email: "email@email.com",
        },
      },
    });

    expect(response).toMatchObject({
      data: {
        createTeacher: {
          email: "email@email.com",
        },
      },
    });
  });

  it("don't create teacher with same email", async () => {
    //Create the first teacher
    await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "password",
        },
      },
      user: {
        type: "TEACHER",
        teacher: {
          email: "email@email.com",
        },
      },
    });
    //Create the second teacher
    const response = await gCall({
      source: createTeacherMutation,
      variableValues: {
        createTeacherData: {
          email: "email@email.com",
          password: "password",
        },
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
