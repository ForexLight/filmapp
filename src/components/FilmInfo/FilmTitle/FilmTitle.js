import React from "react";

import './FilmTitle.css'

export default function FilmTitle(props) {

    let {adult, title, genres = [], vote_average} = props



    genres = genres.map(i => (<span key={i.id}>{i.name}</span>))
    const isAdult = () => {
        if(adult) {
            return (
                <div className='bg-red adult'><span> 18+</span></div>
                )
        }
        return <div className='bg-green'><span> 18-</span></div>

    }

    adult = isAdult()


    return(
        <div className='film-header'>
            <div className="film-title">
                <h1>{title}</h1>
                <div className='genres'>
                    {genres}
                </div>
            </div>
            <div className="special data">
                <div>{adult}</div>
                <span className='rating'> {vote_average}</span>
            </div>
        </div>
    )

}