import React from "react";
import styled from "styled-components";
import Article from "../../shared/layouts/Article";

const PosterWrapper = styled.div`
    display: flex;
    
    .description {
      padding-left: 20px;
      display:flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      h2{
        font-weight: bold;
        font-size: 48px;
      }
      img{
      padding: 3px;
      }
    }
    
    img {
      max-width: 370px;
      max-height: 100%;
    }
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
        <img alt='company-img' key={i.id} style={{width: '200px', height:'50px'}} src={"https://image.tmdb.org/t/p/original/"+i.logo_path} alt=""/>
    )
    return(
            <PosterWrapper>
                <img src={"https://image.tmdb.org/t/p/original/"+ data.poster_path} alt="" className='poster'/>
                <div className='description'>
                    <h2 className='poster-title'>{data.title}</h2>
                    <div className='subtitle'>
                        <ul>
                            <li>Release date: {data.release_date}</li>
                            <li className='genres'>{genres}</li>
                        </ul>
                        <p>{data.overview}</p>
                    </div>
                    <Article title='DIRECTED BY'>
                        {directed}
                    </Article>
                    <Article title='PRODUCED BY'>
                        {produced}
                    </Article>
                    <Article title='CAST'>
                        {casts}
                    </Article>
                    <Article title='PRODUCTION COMPANIES'>
                        {companies}
                    </Article>
                </div>
            </PosterWrapper>
    )
}