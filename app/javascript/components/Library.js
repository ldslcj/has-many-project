import React from 'react'

const Library = (props) => {
    const {id, name, location} = props.library;
    return(
        <>
            <h1>Libraries</h1>
            <h3>{name}</h3>
            <h3>{location}</h3>
            <p>
                id: {id}
            </p>
            <a href="/">back</a>
        </>
    )
}

export default Library