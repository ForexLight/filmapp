import React from "react";
import { NavLink} from "react-router-dom";
import styled from "styled-components";

import Search from './Search/Search';

const HeaderStyled = styled.header`
  padding: 10px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: black;
      margin-left: 20px;
      padding: 5px;
      font-family: 'Mukta', sans-serif;
      font-size: 26px;
      font-weight: 400;

      &:hover {
        background-color: rgba(0, 0, 0, 0.39);
      }
    }
  }
`



function Header(props){

    return(
        <HeaderStyled>
            <nav>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/film">Films</NavLink>
            </nav>
            <Search />
        </HeaderStyled>
    )
}

export default Header