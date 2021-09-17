// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Picture from "../ui/Picture"

// Styles
const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    color: ${Variables.Colors.White};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 50px 5vw;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(51, 51, 51, 0.5);
    }
`

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
`

const Text = styled.p`
    max-width: 400px;
`

const CoverPicture = styled(Picture)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export default function Cover(props) {
    return (
        <Container>
            <CoverPicture src={props.img} alt={props.alt} />

            <Content>
                <Font.H4>{props.subtitle}</Font.H4>

                <Font.H1>{props.title}</Font.H1>

                <Text>{props.text}</Text>
            </Content>
        </Container>
    )
}
