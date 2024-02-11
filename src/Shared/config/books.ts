import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query AllBooks {
    allBooks {
      id
      name
      author
      genre
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $author: String!, $genre: String!) {
    createBook(name: $name, author: $author, genre: $genre) {
      id
      name
      author
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    removeBook(id: $id) {
      id
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $id: ID!
    $name: String!
    $author: String!
    $genre: String!
  ) {
    updateBook(id: $id, name: $name, author: $author, genre: $genre) {
      id
      name
      author
      genre
    }
  }
`;

export const GET_FILTRED_BOOK = gql`
  query GetBook($q: String!) {
    allBooks(filter: { q: $q }) {
      id
      name
      author
      genre
    }
  }
`;

export const GET_TOTAL_BOOK_COUNT = gql`
  query GetAllBooks {
    _allBooksMeta {
      count
    }
  }
`;

export const GET_PAGINATED_BOOKS = gql`
  query GetAllBooks($page: Int, $perPage: Int) {
    allBooks(page: $page, perPage: $perPage) {
      id
      name
      author
      genre
    }
  }
`;
