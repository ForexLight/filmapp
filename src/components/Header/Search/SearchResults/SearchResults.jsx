import React from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";

const SearchResultsStyled = styled.div`
    position: absolute;
  right: 80px;
    width: 300px;
    max-height:100vh;
    overflow: auto;
    background-color: red;
  .close {
    position: sticky;
    top: 10px;
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  
`
const SearchItem = styled.div`
  padding-top: 5px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 100px;
    height: 140px;
  }
  

`



export default function SearchResults({results, onClose}) {

    let styleNone = 'none'
    if (results.length !== 0){
        styleNone = 'block'
    }

    let res = results.map(i =>
        <Link to={{
            pathname: `/film/${i.id}`,
        }}>
            <SearchItem>
            <img src={"https://image.tmdb.org/t/p/original/" + i.poster_path} alt=""/>
            <h3>{i.title}</h3>
            </SearchItem>
        </Link>

    )
    return (
        <div style={{display: `${styleNone}`, position: 'absolute', zIndex: '12',
            top: '5%', width: '300px', height: '100px',
            right: '5%'}}>
            <SearchResultsStyled>
                <div className='close'>
                    <button  onClick={onClose}>
                        X
                    </button>
                </div>
                {res}
            </SearchResultsStyled>
        </div>
    )
}