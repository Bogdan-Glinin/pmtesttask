import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../../../../Shared/config/books";

export const addBook = () => {
    return useMutation(ADD_BOOK, {
      update(cache, {data: { createBook}}){
       cache.modify({
        fields: {
          allBooks(books){
            return [...books, createBook];
          },
          _allBooksMeta(totalCount){
            return totalCount.count + 1;
          }
        }
       })
    }
      });
}