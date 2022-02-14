import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SmallSlider from "../shared/SmallSlider";
import Layout from "../shared/layouts/Layout";
import MainSlider from "../shared/MainSlider";
import Container from "../shared/layouts/Container";
import {useFetchMain} from "../../hooks/hooks";
import Service from "../../services/service";
import log from "tailwindcss/lib/util/log";
import Loading from "../shared/Loading";


const MainStyled = styled.main`
`

export default function Main(){

    const [res, setRes]= useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        Service.getMainPage().then(res => {setIsLoading(true)
            return res}).then(res => {
                setIsLoading(false)
                setRes(res)
            })
    }, [])

    return(
            <Layout>
                {isLoading ? <Loading /> :
                    <MainStyled>
                <MainSlider items={res[0]}/>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Top Rated</h2>
                    <SmallSlider items={res[0]}/>
                </Container>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Popular films</h2>
                    <SmallSlider items={res[0]}/>
                </Container>
                <Container>
                    <h2 style={{fontSize: '34px', color: "black"}}>Upcoming movies</h2>
                    <SmallSlider items={res[0]}/>
                </Container>
            </MainStyled>}
        </Layout>
    )



}