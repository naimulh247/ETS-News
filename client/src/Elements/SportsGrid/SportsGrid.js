import React from 'react';
import './SportsGrid.css'

const SportsGrid = (props) =>{

    return(
        <div className='sports-grid'>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
        </div>
    )
}

export default SportsGrid