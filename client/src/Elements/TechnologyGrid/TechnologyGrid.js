import React from 'react';
import './TechnologyGrid.css';
import moment from 'moment'


const TechnologyGrid = (props) =>{
    return (
        <>
        <div class="card">
            <img class="card-img-top" src={props.image ? props.image : "/image/tech.jpg"} alt="Tech Image"></img>
             <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text text-muted">By: {props.author}</p>
                <p class="card-text text-muted">Source: {props.source}</p>

                <p class="card-text">{props.description}</p>
                {props.url? <button><a  href={props.url} target="_blank" className="btn">Read More</a></button> : <button disabled><a  href="#" className="btn">No Link Available</a></button>}
            </div>
            <div class="card-footer">
                
                <small class="text-muted">{moment(props.date).format("MMMM do YYYY")}</small>
            </div>
        </div>
        </>
    )
}

export default  TechnologyGrid