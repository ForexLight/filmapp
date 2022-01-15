import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  .footer-container {
    width: 80%;
    display: flex;
    justify-content: center;
  }
`
function Footer() {

    return(
        <StyledFooter>
            <div className='footer-container'>
                <h2>Спасибо что зашли на мой недоделок</h2>
            </div>
        </StyledFooter>
    )
}

export default Footer
