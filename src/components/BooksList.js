import React, { useContext } from 'react';
import { BooksContext } from '../App';

const BooksList = () =>
  // { booksData }
  {
    const { booksData } = useContext(BooksContext);

    return (
      <div>
        <ul>
          {booksData &&
            booksData.works.map((book, index) => {
              return (
                <li key={`${index}-${book.title}`}>
                  {book.title}, {book.authors[0].name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

export default BooksList;
