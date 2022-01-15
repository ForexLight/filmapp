import React from "react";
import { NavLink} from "react-router-dom";
import styled from "styled-components";

import Search from './Search/Search';

const HeaderStyled = styled.header`
  padding: 10px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  
  nav {
    display: flex;
    justify-content: space-between;
    width: 80%;
    
    ul {
      display: flex;
      li{
        padding: 5px;
      }
    }
  }
`



function Header(props){

    return(
        <HeaderStyled>
            <nav >
                <ul>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/film">Films</NavLink></li>
                </ul>
                <Search />
            </nav>
        </HeaderStyled>
    )
}

export default Header