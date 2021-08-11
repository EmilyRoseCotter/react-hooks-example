import React from 'react';

const SelectGenre = ({ onSelection }) => {
  return (
    <label>
      Select your favourite genre below
      <select onChange={onSelection} data-testid="select-genre">
        <option value="thriller">Thriller</option>
        <option value="fantasy">Fantasy</option>
        <option value="cats">Cats</option>
        <option value="science">Science</option>
      </select>
    </label>
  );
};

export default SelectGenre;
