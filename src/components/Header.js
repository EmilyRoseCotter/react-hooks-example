import React from 'react';
import SelectGenre from './SelectGenre';

const Header = () => {
  return (
    <div>
      <h1>Book search</h1>
      <SelectGenre />
    </div>
  );
};

export default Header;
