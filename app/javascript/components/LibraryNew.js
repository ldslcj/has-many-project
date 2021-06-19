import React from 'react'

const LibraryNew = (props) => {
    return (
        <div>
            <h1>libraryNew component here</h1>
            <form action='/libraries' method ='post'>
                <input placeholder = 'name' name="library[name]"/>
                <button type="submit">add</button>
            </form>
            
        </div>
    )
}

export default LibraryNew