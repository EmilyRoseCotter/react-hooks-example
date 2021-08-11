import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BooksContext } from '../App';
import SelectGenre from '../components/SelectGenre';

const booksDataValue = {};

describe('SelectGenre', () => {
  const handleSetSubject = jest.fn();

  it('calls handleSetSubject when option is selected', () => {
    render(
      <BooksContext.Provider value={booksDataValue}>
        <SelectGenre onSelection={handleSetSubject} />
      </BooksContext.Provider>,
    );

    fireEvent.change(screen.getByTestId('select-genre'));
    expect(handleSetSubject).toBeCalledTimes(1);
  });
});
