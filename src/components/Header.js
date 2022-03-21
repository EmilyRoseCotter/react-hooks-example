import React from 'react'

const Header = ({ change }) => {
  return (
    <div>
        <h1>Book search</h1>
        <label htmlFor="Genre">Choose a genre :</label>

         <select onChange={ change } name="genres" id="genres">
           <option value="thriller">Thriller</option>
           <option value="fantasy">Fantasy</option>
           <option value="cats">Cats</option>
            <option value="science">Science</option>
         </select>
    </div>
  )
}

export default Header