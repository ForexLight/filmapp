import React from "react";
import styled from "styled-components";

const FrameContainer = styled.div`
  background-color: red;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`

const Youtube = ({video = ''}) => {
    return(
        <FrameContainer>
            <iframe
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"/>
        </FrameContainer>
    )
}

export default Youtube