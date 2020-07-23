import React from 'react'


function SearchBox({placeholder,handleChange}) {
    return (
        <input type="search" placeholder={placeholder} onChange={handleChange} />
    )
}

export default SearchBox
