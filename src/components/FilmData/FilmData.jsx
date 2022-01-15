import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const  FilmData = _ => {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f6180974989b4115cfd59034eb82ace&language=en-US`).then(res => res.json()).then(res => setData(res))
    },)


    return(

        <main>
            id : {data.id}, {data.title}
            <Link to='/'>back</Link>
        </main>

    )
}

export default FilmData