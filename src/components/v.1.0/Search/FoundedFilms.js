import React, {Component, useEffect, useState} from "react";
import FoundedFilm from "./FoundedFilm/FoundedFilm";
import InitData from "../data/InitData";


import './FoundedFilms.css'

const FoundedFilms = ({search, clickOnCard, currFilm}) => {

    const [films , setFilms] = useState([])

    async function fetchData(search){
        search = search || 'Terminator'
        let data = new InitData()
        data.searchByQuery(`${search}`).then(res => setFilms(res.results))
    }

    useEffect(() => {
        fetchData(search)
    }, [search])



    const filmItems = films.sort((a,b) => b.vote_average - a.vote_average).map(i => {

        return(
            <li key={i.id}>
                <FoundedFilm
                    id={i.id}
                    currFilm={currFilm}
                    {...i}
                    clickOnCard={() => clickOnCard(i)}
                />
            </li>
        )
    })


    return (
        <div className='search-result'>
            <ul>
                {filmItems}
            </ul>
        </div>

    )

}

export default FoundedFilms