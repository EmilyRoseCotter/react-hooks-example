import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import { BooksContext } from '../App';
import renderer from 'react-test-renderer';

const booksDataValue = {};

describe('Header', () => {
  it('contains title', () => {
    render(
      <BooksContext.Provider value={booksDataValue}>
        <Header />
      </BooksContext.Provider>,
    );
    expect(screen.getByText('Book search')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BooksContext.Provider value={booksDataValue}>
          <Header />
        </BooksContext.Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
