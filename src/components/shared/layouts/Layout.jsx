import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
  padding: 25px 10%;
`

const Layout = ({children}) => (
    <LayoutStyled>
        {children}
    </LayoutStyled>
)

export default Layout