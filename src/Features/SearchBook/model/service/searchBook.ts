import { useLazyQuery } from "@apollo/client";
import { GET_FILTRED_BOOK } from "../../../../Shared/config/books";

export const searchBook = (searhData: string) => {
    return useLazyQuery(GET_FILTRED_BOOK, {
        variables: { q: searhData },
      });
}
