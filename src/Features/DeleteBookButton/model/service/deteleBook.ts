import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../../../../Shared/config/books";

export const remove = () => {
  return useMutation(DELETE_BOOK, {
    update(cache, { data: { removeBook } }) {
      cache.modify({
        fields: {
          allBooks(currentBooks = []) {
            if (currentBooks.length < Number(removeBook.id) + 1) {
              return currentBooks.filter(
                (book: any) => book.__ref !== `Book:${removeBook.id}`
              );
            } else {
              return currentBooks
                .filter((book: any) => book.__ref !== `Book:${removeBook.id}`)
                .push(currentBooks[+removeBook.id + 1]);
            }
          },
          _allBooksMeta(allBooks) {
            return allBooks.count - 1;
          },
        },
      });
    },
  });
};
