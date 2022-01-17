import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Slider from "./Slider/Slider";
import SmallSlider from "./SmallSlider/SmallSlider";


const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



export default function Main(){
    const [recFilm, setRecFilm ] = useState([])
    const [popularFilms, setPopularFilms] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcomingList, setUpcomingList] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US').then(res => res = res.json())
            .then((res => setPopularFilms(res.results.sort((a, b) => b.vote_average - a.vote_average))))
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US&page=1')
            .then(res => res = res.json()).then(res => setTopRated(res.results))
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US&page=1')
            .then(res => res.json()).then(res => setUpcomingList(res.results))
    },[])

    return(
        <MainStyled>
            <Slider popularFilms={popularFilms}/>
            <h2 style={{fontSize: '34px', color: "black"}}>Top Rated</h2>
            <SmallSlider list={topRated}/>
            <h2 style={{fontSize: '34px', color: "black"}}>Upcoming movies</h2>
            <SmallSlider list={upcomingList}/>
            <h2 style={{fontSize: '34px', color: "black"}}>Upcoming movies</h2>
            <SmallSlider list={topRated}/>



                <div className='recommendation-film'>

                </div>
                <div className='now-playing'>

                </div>

        </MainStyled>
    )
}