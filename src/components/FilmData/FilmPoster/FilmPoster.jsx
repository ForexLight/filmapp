import React from "react";
import styled from "styled-components";

const PosterWrapper = styled.div`
       
`


export default function FilmPoster({data, cast=[], crew=[]}){

    let {genres = [], production_companies = []} = data
    let casts = cast.slice(0,7).map( i => <span key={i.id}>{i.name} </span>)
    genres = genres.map(i => <span key={i.id}>{i.name} </span>)
    crew = crew.filter(i => i.department === "Production"||i.department === "Writing"||i.department === "Directing")
    let directed = crew
        .sort((a, b) => b.popularity - a.popularity)
        .filter(i => i.department === "Directing").map(i => <span key={i.id}>{i.name}, </span>)
    let produced = crew
        .sort((a, b) => b.popularity - a.popularity)
        .filter(i => i.department === "Production").map(i => <span key={i.id}>{i.name}, </span>)
    let companies = production_companies.map(i =>
        <img key={i.id} style={{width: '200px', height:'50px'}} src={"https://image.tmdb.org/t/p/original/"+i.logo_path} alt=""/>
    )
    return(
        <PosterWrapper>
            <img src={"https://image.tmdb.org/t/p/original/"+data.poster_path} alt="" className='poster'/>
            <div className='description'>
                <h2 className='poster-title'>{data.title}</h2>
                <div className='subtitle'>
                    <ul>
                        <li>Release date: {data.release_date}</li>
                        <li className='genres'>{genres}</li>
                    </ul>
                    <p>{data.overview}</p>
                </div>

                <div className='description-item'>
                    <h3>DIRECTED BY</h3>
                    {directed}
                </div>

                <div className='description-item'>
                    <h3>PRODUCED BY</h3>
                    {produced}
                </div>

                <div className='description-item'>
                    <h3>CAST</h3>
                    {casts}
                </div>
                <div className=" description-item">
                    <h3>PRODUCTION COMPANIES</h3>
                    <div className='prod-companies'>
                        {companies}
                    </div>
                </div>
            </div>
        </PosterWrapper>
    )
}