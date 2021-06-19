import React from 'react'

const Book = (props) => {
    const { library, book } = props

    return (
        <div>
            <h1>Book Page</h1>
            <p>Library name: {library.name}</p>
            <p>Library id: {library.id}</p>

            <h1>Book Info</h1>
            <h1>{book.name}</h1>
            <h1>{book.author}</h1>
            <p>Book id: {book.id}</p>
        </div>
    );
}


export default Book