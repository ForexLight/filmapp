import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

import FilmPoster from "./FilmPoster/FilmPoster";
import FilmTrailer from "./FilmTrailer/FilmTrailer"

const FilmDataStyled = styled.main`

  display: flex;
  flex-direction: column;
 
  justify-content: center;
  align-items: center;
 

  .back-ground {
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 700px;
    width: 100%;
  }

  .bg-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 300px;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), #000000);
    padding-bottom: 30px;

    h2 {
      color: whitesmoke;
      font-size: 40px;
      font-weight: bold;
      margin: 20px;
    }

    .bg-btns {
      display: flex;
      align-self: center;
      justify-content: space-between;

      button {
        font-size: 18px;
        height: 48px;
        width: 240px;
        border: none;
        border-radius: 5px;
        color: #000000;
        background-color: rgb(255, 255, 255);
        margin: 10px;
        padding: 10px 30px;
      }

      button:nth-child(2) {
        color: white;
        border: 1px solid #ffffff;
        background-color: rgba(0, 0, 0, 0.61);
      }

      button:hover {
        background-color: red;
      }
    }
  }

`


const  FilmData = _ => {

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
            <div className='back-ground'
                 style={{ background: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path} ') no-repeat 20% 30%`}}>
                <div className="bgTop">
                    id : {data.id}
                    <Link to='/'>back</Link>
                </div>
                <div className="bg-bottom">
                    <h2 className='film-title'> {data.title}</h2>
                    <div className="bg-btns">
                        <button>Watch trailer</button>
                        <button>Official site</button>
                    </div>
                </div>
            </div>
            <FilmPoster data={data} cast={cast} crew={crew}/>
            <FilmTrailer video={video[0]}/>
        </FilmDataStyled>

    )
}

export default FilmData