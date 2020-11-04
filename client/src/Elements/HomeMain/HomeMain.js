import React from 'react';
import moment from 'moment';
import './HomeMain.css';
const HomeMain = (props) =>{
    return (
        // this works:
            <div>
                {/* <h1>{props.author? props.author : <h1>na</h1>}</h1> */}
                 <div className="blog-post">
                     <div className="blog-post_img">
                         <img src={props.image} alt=""></img>
                     </div>
                 </div>
                 <div className="blog-post_info">
                     <div className="blog-post_date">
                         <span> {moment(props.date).format("dddd")} </span>
                         <span> {moment(props.date).format("MMMM do YYYY")} </span>
                     </div>
                     <h1 className="blog-post_title">{props.title}</h1>
                     <p className="blog-post_text">{props.description}</p>
                     <a  href={props.linkToArticle} target="_blank" className="blog-post_cta">Read More</a>
                 </div>
            </div>
            
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
        
        
    )
}

export default HomeMain;