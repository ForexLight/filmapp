import React from "react";
import styled from "styled-components";
import imageSelector from '../../assets/imagesSelector/imageSelector'
import Layout from "./layouts/Layout";

const StyledSection = styled.section`
  background: no-repeat 100% 100% ;
`

export default function BgContainer({type, children}) {
    const image = imageSelector(type)
    console.log(image)

    return(
        <section>
            <Layout>
                {children}
            </Layout>
        </section>
    )
}