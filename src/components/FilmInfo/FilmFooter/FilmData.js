import React from "react";
import './FilmData.css'

export default function FilmData(props) {
    let {overview, homepage, budget, release_date} = props

    return(
        <div className='film-data'>
            <p>{overview}</p>
            <div className='film-data-extra'>
                <a href={homepage}>HomePage</a>
                <span> budget :{budget}$</span>
                <span> Date of release: {release_date}</span>
            </div>
        </div>
    )
}