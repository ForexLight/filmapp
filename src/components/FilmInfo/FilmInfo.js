import React from "react";


const def = {
    name: 'choose film'
}

function FilmInfo({currFilm = def}){
    console.log(currFilm)

    return(
        <div>
            <h1>{currFilm.name}</h1>
            <span>{currFilm.budget}</span>
        </div>
    )
}

export default FilmInfo;