import React from "react";
import styled from "styled-components";

const PosterWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 90%;
  padding-top: 20px;
  
  background-color: red;
  .poster {
    padding-right: 20px;
    padding-left: 50px;
    width: 40%;
  }
  .description{

    padding-top: 10px;
    display: flex;
    flex-direction: column;
    width: 55%;
    text-align: left;
    padding-right: 40px;
    .subtitle{
    
      padding-top: 20px;
      p {
        padding-top: 20px;
      }
      ul li{
        padding-left: 5px;
        display:inline;
      }
      ul li:after{
        content: '*';
      }
    }
  }

`

export default function FilmPoster({data, credits = []}){

    let {genres = []} = data
    let casts = credits.slice(0,7).map( i => <span key={i.id}>{i.name}</span>)
    genres = genres.map(i => <span key={i.id}>{i.name}</span>)


    console.log(data)

    return(
        <PosterWrapper>
            <img src={"https://image.tmdb.org/t/p/original/"+data.poster_path} alt="" className='poster'/>
            <div className='description'>
                <h2>{data.title}</h2>
                <div className='subtitle'>
                    <ul>
                        <li>{data.release_date}</li>
                        <li>{genres}</li>
                    </ul>
                    <p>{data.overview}</p>
                </div>
                <h3>DIRECTED BY</h3>
                <h3>PRODUCED BY</h3>
                <h3>CAST</h3>
                <div>
                    {casts}
                </div>


            </div>
        </PosterWrapper>
    )
}