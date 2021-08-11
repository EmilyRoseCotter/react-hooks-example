import React from 'react';
import { render } from '@testing-library/react';
import { BooksContext } from '../App';
import BooksList from '../components/BooksList';

const booksDataValue = {
  booksData: {
    works: [
      {
        title: 'test 1',
        authors: [
          {
            name: 'author name 1',
          },
        ],
      },
      {
        title: 'test 2',
        authors: [
          {
            name: 'author name 2',
          },
        ],
      },
    ],
  },
};

describe('BookList', () => {
  it('renders correct number of books', () => {
    const { getAllByTestId } = render(
      <BooksContext.Provider value={booksDataValue}>
        <BooksList />
      </BooksContext.Provider>,
    );

    expect(getAllByTestId('book')).toHaveLength(2);
  });
});
