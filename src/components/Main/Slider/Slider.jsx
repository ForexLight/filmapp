import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Outlet, Link } from "react-router-dom";


const SwiperWraper = styled.div`
  width: 90%;
  overflow: hidden;

  .slide {

    .film-poster {
      padding-left: 20px;
      width: 200px;
      height: 300px;
    }

    .sliderTitle {
      font-size: 34px;
      font-weight: bold;
      
    }
    .slider-rating{
      font-size: 34px;
      font-weight: bold;
    }
   
    
  }



`


export default function Slider({ popularFilms}) {

    const sliderItem = popularFilms.slice(0, 5)
    console.log(sliderItem)
    let slides = sliderItem.map(i => {
        console.log(i)
        return (
            <SwiperSlide key={i.id} style={{background: 'no-repeat', backgroundImage: `url(https://image.tmdb.org/t/p/original/${i.backdrop_path})`,
                backgroundSize: '100% 100%'}}>
                <Link to={{
                    pathname: `/film/${i.id}`,
                    state: { films: i }
                }}>

                <div className='slide' style={{color: "white",background: 'linear-gradient(rgba(0, 0, 0, 0.25), rgb(12, 12, 14))', height: '700px', width: '100%', display: "flex", justifyContent: "space-between", alignItems: "flex-end", }}>
                    <div className='slide-title' style={{display:'flex', maxWidth:'800px'}}>
                        <img className='film-poster' src={"https://image.tmdb.org/t/p/original/" + i.poster_path} alt="" />
                        <h2 className='sliderTitle' style={{ alignSelf: "flex-end", padding: '20px'}}>{i.title}</h2>
                    </div>
                    <div>
                       <h2 className='slider-rating' style={{padding: '20px', margin: '10px', alignSelf: "center", border: 'black 1px solid', backgroundColor: "green" , borderRadius: '40%'}}>{i.vote_average}</h2>
                    </div>

                </div>

                    </Link>

            </SwiperSlide>
        )
    })
    return(
        <SwiperWraper>


        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}

            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides}

        </Swiper>
        </SwiperWraper>
    )
}