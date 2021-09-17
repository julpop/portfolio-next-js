// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 0 -24px;

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 0;
    }
`

const Col = styled.div`
    background-color: rgba(67, 80, 88, 0.05);
    padding: 24px;

    h3 {
        font-size: 50px;
        color: ${Variables.Colors.Red};
    }

    h4 {
        margin-bottom: 24px;
    }
`

export default function Steps(props) {
    return (
        <Container>
            <Col>
                <Font.H3>1.</Font.H3>

                <Font.H4>{props.title1}</Font.H4>

                <p>{props.content1}</p>
            </Col>

            <Col>
                <Font.H3>2.</Font.H3>

                <Font.H4>{props.title2}</Font.H4>

                <p>{props.content2}</p>
            </Col>

            <Col>
                <Font.H3>3.</Font.H3>

                <Font.H4>{props.title3}</Font.H4>

                <p>{props.content3}</p>
            </Col>
        </Container>
    )
}
