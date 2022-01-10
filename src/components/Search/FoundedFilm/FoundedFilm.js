import React from "react";
import './FoundedFilm.css'

function FoundedFilm({poster_path, title, vote_average, clickOnCard, currFilm, id}) {


    const imgPart = 'https://image.tmdb.org/t/p/original'
    let img


    img = imgPart + poster_path

    let styles = 'film__search-data'

    if(currFilm.id === id){
        styles += ' active'
    }


    if(!poster_path ){
        img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Black_photo.jpg/450px-Black_photo.jpg'
    }

    return(
        <div
            className={styles}
            onClick={clickOnCard}
        >
            <img src={img} alt="img"  className='search-data-logo' />
            <div className='film__search-info'>
                <h2>
                    {title}
                </h2>
                <span>
                 Rating {vote_average}
            </span>
            </div>

        </div>
    )
}

export default FoundedFilm;