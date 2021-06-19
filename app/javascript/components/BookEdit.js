import React from 'react'

const BookEdit = (props) => {
    const { library, book } = props
    return(
        <div>
            <h1>Book Edit Page</h1>
            <form action={`/libraries/${library.id}/books/${book.id}`} method='post'>
                <input type='hidden' name='_method' value='patch'/>
                <p>Book Title</p>
                <input defaultValue={book.name} name='book[name]' />
                <p>Book Author</p>
                <input defaultValue={book.author} name='book[author]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default BookEdit