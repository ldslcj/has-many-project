import React from 'react'

const libraryEdit = (props) => {
    const {name, id} = props.library
    return (
        <div>
            <h1>Library Edit</h1>
            <from action={`/libraries/${id}`} method ='post'>
                <input type = 'hidden' name = '_method' value = 'patch' />
                <input defaultValue = {name} placeholder = 'Library name' name ='library[name]' />
                <input defaultValue = {location} placeholder = 'Location' name ='library[location]' />
                <button type = 'submit'> Update </button>
            </from>
        </div>
    )
}

export default libraryEdit