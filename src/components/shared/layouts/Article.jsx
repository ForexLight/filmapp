import React from "react";
import styled from "styled-components";

const ArticleStyled = styled.div`
  padding-top: 20px;
  width: 100%;
    h3 {
      padding-left: 10px;
      background-color: red;
      width: 100%;
      font-size: 24px;
    }
    .childrens {
    padding-top: 10px;
    }
`


const Article = ({children, title}) => (
    <ArticleStyled>
        <h3>{title}</h3>
        <div className='childrens'>
            {children}
        </div>
    </ArticleStyled>
)

export default Article