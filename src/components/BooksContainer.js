import React from 'react'
import BooksHeader from './BooksHeader'
import BooksList from './BooksList'

const BooksContainer = (
    // { booksData }
    ) => {
    return (
        <div>
            <BooksHeader />
            <BooksList 
            // booksData={booksData} 
            />
        </div>
    )
}

export default BooksContainer
