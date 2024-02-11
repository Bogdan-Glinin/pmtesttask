import { useMutation } from "@apollo/client";
import { GET_PAGINATED_BOOKS, UPDATE_BOOK } from "../../../../Shared/config/books";

export const update = (pagination: any) => {
    return useMutation(UPDATE_BOOK, {
        refetchQueries: [{ query: GET_PAGINATED_BOOKS, variables: {page: pagination.current, perPage: pagination.pageSize} }],
      });
}