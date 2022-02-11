import React from "react";
import styled from "styled-components";
import Youtube from "../../shared/Youtube";

const TrailerWraper = styled.div`
  width: 100%;
`

export default function FilmTrailer({video = {}}) {
    const {key} = video
    console.log(key)
    return (
    <TrailerWraper>
        <div className='trailer-title'>
            <h2>TRAILER</h2>
        </div>

        <Youtube video={key} />
    </TrailerWraper>
    )
}