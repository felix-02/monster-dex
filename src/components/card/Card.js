import React from 'react'
import './card-styles.css'
function Card(props) {
    return (
        <div>
            <img src={` https://robohash.org/${props.x.id}?set=set2 `} alt=""/>
            <h1 >{props.x.name}</h1>
    <p>{props.x.email}</p>
        </div>
    )
}

export default Card
