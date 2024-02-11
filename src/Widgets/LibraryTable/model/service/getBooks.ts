import { useQuery } from "@apollo/client";
import { ALL_BOOKS, GET_PAGINATED_BOOKS, GET_TOTAL_BOOK_COUNT } from "../../../../Shared/config/books";

export const getAllBooks = () => {
    return useQuery(ALL_BOOKS)
}

export const getTotalBooks = () => {
    return useQuery(GET_TOTAL_BOOK_COUNT);
}

export const getPaginatedBooks = (page: any, perPage: any) => {
    return useQuery(GET_PAGINATED_BOOKS, {
        variables: {
            page,
            perPage
        }
    })
}