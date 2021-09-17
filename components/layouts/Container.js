// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.White};
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    padding: 100px 0;

    & > * {
        grid-column: 2;
    }

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: 5vw 1fr 5vw;
    }
`

const Content = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;
`

export default function Container(props) {
    return (
        <Wrapper {...props}>
            <Content>{props.children}</Content>
        </Wrapper>
    )
}
