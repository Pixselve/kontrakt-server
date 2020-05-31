import { gCall } from "../../../test-utils/gCall";
import { dropDatabase } from "../../../utils/dropDatabase";

const deleteTeacherMutation = `
  mutation DeleteTeacher($data: TeacherWhereUniqueInput!) {
    deleteTeacher(where: $data) {
      email
      password
    }
  }
`;


beforeAll(async () => {
  await dropDatabase();
});

describe("DeleteTeacher", () => {

});
