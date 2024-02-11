import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../../Shared/config/users";

interface createUserSchema {
  name: string;
  role: string;
  login: string;
  password: string;
}

export const createUser = ({
  name,
  role,
  login,
  password,
}: createUserSchema) => {
  return useMutation(CREATE_USER, {
    variables: {
      name,
      role,
      login,
      password,
    },
  });
};

