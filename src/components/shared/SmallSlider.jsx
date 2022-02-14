import React from "react";
import Slider from "react-slick"
import styled from "styled-components";
import {Link} from "react-router-dom";
const SliderContainer = styled.div`
    
`
const Slide = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  .slideWrapper {
    display: flex;
    flex-direction: column;
    padding: 5px;
    img {
      max-height: 300px;
    }
  }
  
`
const SmallSlider = ({items = []}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        lazyLoad: true
    }

    const sliderItems = items.map(i => {
        if(items.length === 0) {
            return (
                <div>...loading</div>
            )
        }
        return (
            <Link to={`/film/${i.id}`}>
                <Slide key={i.id}>
                    <div className='slideWrapper'>
                        <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt="poster" />
                        <span>{i.title}</span>
                    </div>
                </Slide>
            </Link>
        )
    })

    return (
        <SliderContainer>
            <Slider {...settings}>
                {sliderItems}
            </Slider>

        </SliderContainer>
    )
}

export default SmallSlider