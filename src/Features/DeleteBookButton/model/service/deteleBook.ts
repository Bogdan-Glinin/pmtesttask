import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../../../../Shared/config/books";

export const remove = () => {
  return useMutation(DELETE_BOOK, {
    update(cache, { data: { removeBook } }) {
      cache.modify({
        fields: {
          allBooks(currentBooks = []) {
              const result = currentBooks.find(
                (obj: any) => {
                  let parts = obj.__ref.split(":");
                  let number = parseInt(parts[1]);
                  return number % 10 === 1 && number !== 1
                }
              );
              return currentBooks
                .filter((book: any) => book.__ref !== `Book:${removeBook.id}`)
                .push(result);
          },
          _allBooksMeta(allBooks) {
            return allBooks.count - 1;
          },
        },
      });
    },
  });
};
