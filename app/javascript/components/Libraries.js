import React from 'react'


const Libraries = (props) => {
    const { libraries } = props
    const renderLibraries = () => {
        return libraries.map ( library => {
            return (
                <div>
                    <h1>{library.name}</h1>
                    <a href = {`/libraries/${library.id}`}>Show</a>
                    <a href = {`/libraries/${library.id}/books`}>Show Books</a>
                    <a href = {`/libraries/${library.id}/edit`}>Edit</a>
                    <a href = {`/libraries/${library.id}`} data-method = 'delete'>Delete</a>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Libraries Here</h1>
            <a href='/libraries/new'>Add Library</a>
            {renderLibraries()}
        </div>
    )

}



export default Libraries