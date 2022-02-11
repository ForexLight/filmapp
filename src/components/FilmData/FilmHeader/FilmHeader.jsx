import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const FilmHeaderStyled = styled.div`
  width: 100%;
  height: 650px;

  .wrapper {
    background: no-repeat 20% 20%;
    background-size: 100% 100%;
    height: 100%;

    .info-container {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgb(12, 12, 14));
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .bg-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          color: white;
          background-color: rgba(0, 0, 0, 0.49);
          padding: 20px;
        }
      }

      .bg-bottom {
        padding: 20px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .film-title {
          font-size: 36px;
          font-weight: bold;
          color: white;
        }

        .bg-btns {
          align-self: center;
          width: 400px;
          display: flex;
          justify-content: space-between;
          button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.15);
            color: white;
            font-size: 24px;
          }
          .red {
            background-color: red;
            
          }
        }
      }
    }
  }


`


const FilmHeader = ({data}) => (
    <FilmHeaderStyled>
        <div className='wrapper'
             style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')`}}>
            <div className='info-container'>
                <div className="bg-top">
                    <div>
                        <span>id : {data.id}</span>
                    </div>
                    <div>
                        <Link to='/'>back</Link>
                    </div>

                </div>
                <div className="bg-bottom">
                    <h2 className='film-title'>{data.title}</h2>
                    <div className="bg-btns">
                        <button>Watch trailer</button>
                        <button className='red'>Official site</button>
                    </div>
                </div>
            </div>
        </div>
    </FilmHeaderStyled>
)

export default FilmHeader