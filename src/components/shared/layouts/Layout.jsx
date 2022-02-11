import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
  margin: 0 200px;
`

const Layout = ({children}) => (
    <LayoutStyled>
        {children}
    </LayoutStyled>
)

export default Layout