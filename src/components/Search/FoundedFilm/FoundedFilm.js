import React from "react";
import './FoundedFilm.css'

function FoundedFilm({backdrop_path, title, vote_average, clickOnCard}) {

    const imgPart = 'https://image.tmdb.org/t/p/w200/'
    let img


    img = imgPart + backdrop_path


    if(!backdrop_path ){
        img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Black_photo.jpg/450px-Black_photo.jpg'
    }

    return(
        <div
            onClick={clickOnCard}
        >
            <img src={img} alt="img" width='250px' height='150px' />
            <span>
                {title}
            </span>
            <span>
                 Rating {vote_average}
            </span>
        </div>
    )
}

export default FoundedFilm;