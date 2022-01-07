import React from "react";

function FoundedFilm({img, name, budget, clickOnCard}) {


    return(
        <div
            onClick={clickOnCard}
        >
            <img src={img} alt=""/>
            <span>
                {name}
            </span>
            <span>
                {budget}
            </span>
        </div>
    )
}

export default FoundedFilm;