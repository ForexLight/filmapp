import React from "react";
import styled from "styled-components";
import Youtube from "../../shared/Youtube";

const TrailerWraper = styled.div`
  width: 100%;
  .trailer-title {
    width: 100%;
    background-color: red;
    font-size: 32px;
  }
  .video {
    height: 600px;
    padding-top: 20px;
  }
  
`

export default function FilmTrailer({video = {}}) {
    const {key} = video
    return (
    <TrailerWraper>
        <div className='trailer-title'>
            <h2>TRAILER</h2>
        </div>
        <div className='video'>
            <Youtube video={key} />
        </div>
    </TrailerWraper>
    )
}