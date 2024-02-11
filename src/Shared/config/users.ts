import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  query authUser($login: String!, $password: String!) {
    allUsers(filter: { login: $login, password: $password }) {
      id
    }
  }
`;

export const GET_USER_DATA = gql`
  query GetUser($id: ID!) {
    User(id: $id) {
      name,
      login,
      role
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $role: String!
    $login: String!
    $password: String!
  ) {
    createUser(name: $name, role: $role, login: $login, password: $password) {
      id
    }
  }
`;

export const CHECK_USER_EXIST = gql`
  query CheckLogin($login: String!) {
    allUsers(filter: { login: $login }) {
      id
    }
  }
`;
