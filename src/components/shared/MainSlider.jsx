import React from "react";
import Slider from "react-slick"
import styled from "styled-components";
import {Link} from "react-router-dom";

const SliderContainer = styled.div`
  .slick-arrow {
    background-color: red;
  }
  background-color: black;
`

const SlideItem = styled.div`
  margin-top: 5px;
  .wrapper {
    height: 500px;
    background: no-repeat 100% 100%;
    background-size: 100% 100%;
  }
  .slide-title {
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgb(12, 12, 14));
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: white;
    padding: 20px;
    .title {
      padding-right: 50px;
      font-size: 36px;
      font-weight: bold;
    }
    .vote {
      padding: 10px;
      border-radius: 15%;
      background-color: greenyellow;
      color: black;
    }
    img {
      width: 100px;
      height: 175px;
    }
  }
`

const MainSlider = ({items = []}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true
    }

    const sliderItems = items.sort((a, b) => b.vote_average - a.vote_average).slice(0, 7).map(i => (
        <Link to={`film/${i.id}`}>
            <SlideItem key={i.id}>
                <div className='wrapper' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780/${i.backdrop_path})`}}>
                    <div className='slide-title'>
                        <img className='film-poster' src={"https://image.tmdb.org/t/p/w500/" + i.poster_path} alt="" />
                        <h2 className='title'>{i.title}</h2>
                        <div className='vote'>
                            <h2 className='slider-rating'>{i.vote_average}</h2>
                        </div>

                    </div>
                </div>
            </SlideItem>
        </Link>
    ))


    return(
        <SliderContainer>
            <Slider {...settings}>
                { sliderItems}
            </Slider>
        </SliderContainer>
    )
}


export default MainSlider