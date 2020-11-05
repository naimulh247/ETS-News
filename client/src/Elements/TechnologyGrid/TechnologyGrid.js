import React from 'react';
import './TechnologyGrid.css';


const TechnologyGrid = (props) =>{
    return (

        <div className="tech-grid">
            <h1>{props.title}</h1>
            <p>{props.author}</p>
        </div>
    )
}

export default  TechnologyGrid