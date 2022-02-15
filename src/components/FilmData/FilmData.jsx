import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";

import FilmPoster from "./FilmPoster/FilmPoster";
import FilmTrailer from "./FilmTrailer/FilmTrailer"
import Container from "../shared/layouts/Container";
import Layout from "../shared/layouts/Layout";
import FilmHeader from "./FilmHeader/FilmHeader";
import Service from "../../services/service";

const FilmDataStyled = styled.main`
    

`


const FilmData = () => {


    window.scrollBy(0, 0)

    const { id } = useParams();
    const [data, setData] = useState([])
    const [credits, setCredits] = useState({cast: [], crew: []})
    const [video, setVideo] = useState([])

    useEffect(() => {
        async function getData(){
            return await Service.getFilmPage(id)
        }
        getData().then(r => {
            let [data, credits, video] = r
            setData(data)
            setCredits(credits)
            setVideo(video)
        })
    },[id])

    return(

        <FilmDataStyled>
            <FilmHeader data={data}/>
            <Layout>
                <Container>
                    <FilmPoster data={data} credits={credits}/>
                </Container>
                <Container>
                    <FilmTrailer video={video[0]}/>
                </Container>

            </Layout>

        </FilmDataStyled>

    )
}

export default FilmData