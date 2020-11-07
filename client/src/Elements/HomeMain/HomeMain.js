import React from 'react';
import moment from 'moment';
import './HomeMain.css';
import HomeGrid from '../../Elements/HomeMain/HomeGrid'
const HomeMain = (props) =>{
    return (
        // this works:
            // <div>
            //     {/* <h1>{props.author? props.author : <h1>na</h1>}</h1> */}
            //      <div className="blog-post">
            //          <div className="blog-post_img">
            //              <img src={props.image} alt=""></img>
            //          </div>
            //      </div>
            //      <div className="blog-post_info">
            //          <div className="blog-post_date">
            //              <span> {moment(props.date).format("dddd")} </span>
            //              <span> {moment(props.date).format("MMMM do YYYY")} </span>
            //          </div>
            //          <h1 className="blog-post_title">{props.title}</h1>
            //          <p className="blog-post_text">{props.description}</p>
            //          <a  href={props.linkToArticle} target="_blank" className="blog-post_cta">Read More</a>
            //      </div>
            // </div>
            
        // this is test:

        // <div class="blog-slider">
        // <div class="blog-slider__wrp swiper-wrapper">
        //   <div class="blog-slider__item swiper-slide">
        //         <div class="blog-slider__img">
                
        //             <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""> </img>
        //             </div>
        //             <div class="blog-slider__content">
        //             <span class="blog-slider__code">26 December 2019</span>
        //             <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        //             <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        //             <a href="#" class="blog-slider__button">READ MORE</a>
        //         </div>
        //   </div>
        
          
          
          
    //     </div>
    //   </div>
        

    // more tests:

//     <div className="home-card">
//     {/* <!-- Post--> */}
//         <div className="post-module">
//         {/* <!-- Thumbnail--> */}
//             <div className="thumbnail">
//             <div className="date">
//             <div className="day">27</div>
//             <div className="month">Mar</div>
//             </div><img src={props.image}/>
//         </div>
//         {/* <!-- Post Content--> */}
//         <div className="post-content">
//             <div className="category">{props.cat}</div>
//             <h1 className="title">{props.title? props.title : 'Unknown Title'}</h1>
//             <p className="text-muted">By: {props.author ? props.author : 'Unknown Author'}</p>
//             <p className="text-muted">Source: {props.source ? props.source : 'Unknown Source'}</p>
//             <p className="">{props.description? props.description : 'Unknown Descrption'}</p>
//             <div className="post-meta"><span className="timestamp">
//                 {moment(props.date).format("MMMM do YYYY")}</span></div>
//         </div>
//         </div>

//         <div className="post-module">
//         {/* <!-- Thumbnail--> */}
//             <div className="thumbnail">
//             <div className="date">
//             <div className="day">27</div>
//             <div className="month">Mar</div>
//             </div><img src={props.image}/>
//         </div>
//         {/* <!-- Post Content--> */}
//         <div className="post-content">
//             <div className="category">{props.cat}</div>
//             <h1 className="title">{props.title? props.title : 'Unknown Title'}</h1>
//             <p className="text-muted">By: {props.author ? props.author : 'Unknown Author'}</p>
//             <p className="text-muted">Source: {props.source ? props.source : 'Unknown Source'}</p>
//             <p className="">{props.description? props.description : 'Unknown Descrption'}</p>
//             <div className="post-meta"><span className="timestamp">
//                 {moment(props.date).format("MMMM do YYYY")}</span></div>
//         </div>
//         </div>

//   </div>



// more testing for alteranting cards
        <div>
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
        </div>
    )
}

export default HomeMain;