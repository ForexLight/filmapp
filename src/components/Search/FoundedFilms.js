import React, {Component, useEffect, useState} from "react";
import FoundedFilm from "./FoundedFilm/FoundedFilm";
import InitData from "../data/InitData";

import './FoundedFilms.css'

const FoundedFilms = ({search, clickOnCard}) => {

    const [films , setFilms] = useState([])

    async function fetchData(search){
        search = search || 'Terminator'
        let data = new InitData()
        let res = data.searchByQuery(`${search}`).then(res => setFilms(res.results))
        console.log(res)
    }

    useEffect(() => {
        fetchData(search)
    }, [search])



    const filmItems = films.map(i => {


        return(
            <li key={i.id}>
                <FoundedFilm
                    id={i.id}
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