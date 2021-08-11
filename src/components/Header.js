import React, { useContext } from 'react';
import { BooksContext } from '../App';

const Header = () =>
  // { handleSetSubject }
  {
    const { handleSetSubject } = useContext(BooksContext);
    return (
      <div>
        <h1>Book search</h1>
        <label>
          Select your favourite genre below
          <select onChange={handleSetSubject}>
            <option value="thriller">Thriller</option>
            <option value="fantasy">Fantasy</option>
            <option value="cats">Cats</option>
            <option value="science">Science</option>
          </select>
        </label>
      </div>
    );
  };

export default Header;
