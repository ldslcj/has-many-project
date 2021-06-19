import React from 'react'

const BookNew = (props) => {
    const { library } = props
    return(
        <div>
            <h1>New book for: {library.name}</h1>
            <form action={`/libraries/${library.id}/books`} method='post'>
                <p>Book Title</p>
                <input name='book[name]' />
                <p>Book Author</p>
                <input name='book[author]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default BookNew