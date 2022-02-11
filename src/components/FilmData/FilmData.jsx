import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

import FilmPoster from "./FilmPoster/FilmPoster";
import FilmTrailer from "./FilmTrailer/FilmTrailer"
import Container from "../shared/layouts/Container";
import Layout from "../shared/layouts/Layout";
import FilmHeader from "./FilmHeader/FilmHeader";

const FilmDataStyled = styled.main`
    

`


const FilmData = () => {

    const { id } = useParams();
    const [data, setData] = useState([])
    const [cast, setCast]  = useState([])
    const [crew, setCrew] = useState([])
    const [video, setVideo] = useState([])

    useEffect(() => {
        async function getData(){
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US`)
                .then(res => res.json()).then(res => setData(res))
            await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US`)
                .then(res => res.json()).then(res => {
                setCast(res.cast)
                setCrew(res.crew)})
            await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US`)
                .then(res => res.json()).then(res => setVideo(res.results.filter(i => i.type === 'Trailer')))
        }
        getData().then(r => r)
    },[id])

    console.log(video)

    return(

        <FilmDataStyled>
            <FilmHeader data={data}/>
            <Layout>
                <Container>
                    <FilmPoster data={data} cast={cast} crew={crew}/>
                </Container>
                <Container>
                    <FilmTrailer video={video[0]}/>
                </Container>

            </Layout>

        </FilmDataStyled>

    )
}

export default FilmData