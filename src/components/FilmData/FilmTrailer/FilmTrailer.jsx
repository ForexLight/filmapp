import React from "react";
import styled from "styled-components";
import YoutubeEmbed from "../../YoutubeEmbed/YoutubeEmbed";

const TrailerWraper = styled.div`
  margin: 20px 10px;
  width: 72%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .trailer-title {
    width: 100%;
    background-color: red;
    h2 {
      align-self: flex-start;
      padding-left: 5%;
      font-size: 26px;
      font-weight: 800;
    }
  }
  

  .video-responsive {
    padding-top: 20px;
    width: 100%;
    height: 600px;
  }

  .video-responsive iframe {
    width: 100%;
    height: 100%;
  }
`

export default function FilmTrailer({video = {}}) {
    const {key} = video
    console.log(key)
    return (
    <TrailerWraper>
        <div className='trailer-title'>
            <h2>TRAILER</h2>
        </div>

        <YoutubeEmbed embedId={key}/>
    </TrailerWraper>
    )
}