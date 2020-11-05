import React from 'react';
import './EntertainmentGrid.css'

const EntertainmentGrid = (props) =>{
    return(
        <div className="ent-grid">
            <h1>{props.title}</h1>
            <p>{props.author}</p>
        </div>
    )
} 

export default EntertainmentGrid;