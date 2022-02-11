import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SmallSlider from "../shared/SmallSlider";
import Layout from "../shared/layouts/Layout";
import MainSlider from "../shared/MainSlider";
import Container from "../shared/layouts/Container";


const MainStyled = styled.main`
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
        <Layout>
            <MainStyled>
                <MainSlider items={popularFilms}/>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Top Rated</h2>
                    <SmallSlider items={topRated}/>
                </Container>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Popular films</h2>
                    <SmallSlider items={popularFilms}/>
                </Container>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Upcoming movies</h2>
                    <SmallSlider items={upcomingList}/>
                </Container>
            </MainStyled>
        </Layout>

    )
}