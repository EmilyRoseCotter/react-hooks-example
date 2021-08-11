import React, { useContext } from 'react';
import { BooksContext } from '../App';

const SelectGenre = () => {
  const { handleSetSubject } = useContext(BooksContext);

  return (
    <label>
      Select your favourite genre below
      <select onChange={handleSetSubject}>
        <option value="thriller">Thriller</option>
        <option value="fantasy">Fantasy</option>
        <option value="cats">Cats</option>
        <option value="science">Science</option>
      </select>
    </label>
  );
};

export default SelectGenre;
