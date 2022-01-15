import React from "react";

import './FilmTitle.css'

export default function FilmTitle(props) {

    let {adult, title, genres = [], vote_average , backdrop_path} = props

    console.log(backdrop_path)



    genres = genres.map(i => (<span key={i.id}> {i.name} </span>))
    const isAdult = () => {
        if(adult) {
            return (
                <div className='bg-red adult'><span> </span></div>
                )
        }
        return <div className='bg-green adult'><span>under 18</span></div>

    }

    adult = isAdult()


    return(
        <div className='film-header' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
            <div className="film-title">
                <h2>{title}</h2>
                <div className='genres'>
                    {genres}
                </div>
            </div>
            <div className="special-data">
                {adult}
                <span className='rating'> Film db rating {vote_average}</span>
            </div>
        </div>
    )

}