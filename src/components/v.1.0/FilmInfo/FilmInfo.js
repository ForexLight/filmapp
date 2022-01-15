import React, {useEffect, useState} from "react";
import InitData from "../data/InitData";
import FilmTitle from "./FilmTitle/FilmTitle";
import FilmData from "./FilmData/FilmData";

import './FilmInfo.css'


function FilmInfo({currFilm}){


    const {id = 2} = currFilm

    const [film ,setFilm] = useState([])

    async function fetchData(id){
        let data = new InitData().searchById(`${id}`).then(res => setFilm(res))
    }

    useEffect(() => {
        fetchData(id)
    }, [id])



    const {adult, title, genres, vote_average, overview, homepage, budget, release_date, backdrop_path, original_language, production_companies, production_countries, poster_path} = film
    console.log(film)
    return(
           <div className='film-info__container'>
               <FilmTitle
                   title={title}
                   adult={adult}
                   genres={genres}
                   vote_average={vote_average}
                   backdrop_path={backdrop_path}
               />
               <FilmData
                   overview={overview}
                   homepage={homepage}
                   budget={budget}
                   release_date={release_date}
                   original_language={original_language}
                   production_companies={production_companies}
                   production_countries={production_countries}
                   poster_path={poster_path}
               />
           </div>

    )
}

export default FilmInfo;