import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import { BooksContext } from '../App';

const booksDataValue = {};

describe('Header', () => {
  it('contains title', () => {
    render(<Header />);
    expect(screen.getByText('Book search')).toBeInTheDocument();
  });
});
