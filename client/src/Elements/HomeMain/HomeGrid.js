import React from 'react';
import moment from 'moment'



const HomeGrid = (props) =>{


    return(

        <>
        <div class="card">
            <img class="card-img-top" src={props.image} alt="Image"></img>
             <div class="card-body">
                <h5 class="card-title">{props.title ? props.title : 'Unknown Title'}</h5>
                <p class="card-text text-muted">By: {props.author ? props.author : 'Unknown Author'}</p>
                <p class="card-text text-muted">Source: {props.source? props.source : 'Unknown Source'}</p>
                <p class="card-text">{props.description ? props.description : 'Unknown Description'}</p>

                {props.url? <button><a  href={props.url} target="_blank" className="btn">Read More</a></button> : <button disabled><a  href="#" className="btn">No Link Available</a></button>}
            </div>
            <div class="card-footer">
                <small class="text-muted">{moment(props.date).format("MMMM do YYYY")}</small>
            </div>
        </div>
        </>
    )
}

export default HomeGrid;