import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.section`
  padding: 30px 0;
`

const Container = ({children}) => {

    return(
        <ContainerLayout>
            {children}
        </ContainerLayout>
    )
}

export default Container