import React, {useEffect, useState} from "react";
import InitData from "../data/InitData";
import FilmTitle from "./FilmTitle/FilmTitle";
import FilmData from "./FilmFooter/FilmData";


function FilmInfo({currFilm}){


    const {id = 2} = currFilm

    const [film ,setFilm] = useState([])

    async function fetchData(id){
        let data = new InitData().searchById(`${id}`).then(res => setFilm(res))
    }

    useEffect(() => {
        fetchData(id)
    }, [id])

    console.log(film)

    const {adult, title, genres, vote_average, overview, homepage, budget, release_date} = film
    const isAdult = () => {
        if(adult){
            return(
            <div><span className='bg-red'>18</span></div>
            )
        }
        return (
            <div><span className='bg-green'>18</span></div>

        )
    }
    return(
        <div>
            <FilmTitle
                title={title}
                adult={adult}
                genres={genres}
                vote_average={vote_average}
            />
            <FilmData
                overview={overview}
                homepage={homepage}
                budget={budget}
                release_date={release_date}
            />
        </div>
    )
}

export default FilmInfo;