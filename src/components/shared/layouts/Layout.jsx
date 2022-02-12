import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
  margin: 0 10%;
`

const Layout = ({children}) => (
    <LayoutStyled>
        {children}
    </LayoutStyled>
)

export default Layout