import React from "react";
import './FilmData.css'

export default function FilmData(props) {
    let {overview, homepage, budget, release_date, original_language, production_companies=[], production_countries, poster_path} = props

    console.log()

    const propComp = production_companies.map(i => (
        <div key={i.id}>
            <span>{i.name}</span>
        </div>
    ))

    const poster = `https://image.tmdb.org/t/p/original${poster_path}`


    return(
        <div className='film-data'>
            <div className='film-prod'>
                <img src={poster} className='film-poster' alt=""/>
                <div className='film-prod-data'>
                    <span>Lang : {original_language}</span><br/>
                    <span>
                        producted by
                    </span>
                    {propComp}
                </div>

            </div>
            <div className='film-revue'>
                <div >
                    <p>{overview}</p>
                </div>
                <div className='film-data-extra'>
                    <a href={homepage}>HomePage</a>
                    <span> budget :{budget}$</span>
                    <span> Date of release: {release_date}</span>
                </div>
            </div>
        </div>

    )
}