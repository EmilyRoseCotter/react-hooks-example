import React, { useContext } from 'react';
import { BooksContext } from '../App';
import SelectGenre from './SelectGenre';

const Header = () => {
  const { handleSetSubject } = useContext(BooksContext);

  return (
    <div>
      <h1>Book search</h1>
      <SelectGenre onSelection={handleSetSubject} />
    </div>
  );
};

export default Header;
