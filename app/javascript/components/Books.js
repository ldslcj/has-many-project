import React from 'react'

const Books = (props) => {
    const {library, books } = props

    const renderBooks = () => {
        return books.map(book => {
            return (
                <div>
                    <h1>{book.name}</h1>
                    <h2>{book.author}</h2>
                    <a href = {`/libraries/${library.id}/books/${book.id}`}>Show</a>
                    <a href = {`/libraries/${library.id}/books/${book.id}/edit`}>Edit</a>
                    <a href = {`/libraries/${library.id}/books/${book.id}`} data-method = 'delete'>Delete</a>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>Books Page</h1>
            <p>Library name is {library.name}</p>
            <p>Location is {library.location}</p>
            <p>Library id is {library.id}</p>
            <h1>Books</h1>
            <a href = {`/libraries/${library.id}/books/new`}>Add Books</a>
            {renderBooks()}
        </div>
    )
}




export default Books