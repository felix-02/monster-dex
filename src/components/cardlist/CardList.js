import React from 'react'
import './cardlist-styles.css'
import Card from '../card/Card'

function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map((x) => (
                <Card key={x.id} x={x}/>
            ))}
        </div>
    )
}

export default CardList
