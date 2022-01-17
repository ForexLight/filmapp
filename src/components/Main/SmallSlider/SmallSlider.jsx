import React, {useEffect, useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperWraper = styled.div`
width: 90%;
  h2 {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
   
  `



export default function SmallSlider({list}){

    let res = list.map(i => {
        return (
            <SwiperSlide key={i.id} style={{paddingTop: '40px',paddingLeft: '50px', paddingRight: '50px'}}>
                <Link to={{
                    pathname: `/film/${i.id}`,
                    state: { films: i }
                }}>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: '10px'}}>
                    <img style={{width: '300px', height: '400px'}} src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt="" />
                    <span>{i.title}</span>
                </div>
                </Link>
            </ SwiperSlide>
        )
    })

    return(

        <SwiperWraper>

            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                slidesPerView={5}
                navigation

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {res}

            </ Swiper>
        </SwiperWraper>)
}

