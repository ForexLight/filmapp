import React, {Component} from "react";
import FoundedFilm from "./FoundedFilm/FoundedFilm";

const FoundedFilms = ({films, clickOnCard}) => {

    const filmItems = films.map(i => {
        const {id, ...info} = i
        return(
            <li key={id}>
                <FoundedFilm
                    id={id}
                    {...info}
                    clickOnCard={() => clickOnCard(id)}
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