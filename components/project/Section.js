// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Image from "../ui/Image"

// Styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;

    img {
        width: 100%;
    }

    p strong {
        color: ${Variables.Colors.Red};
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: center;

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Col = styled.div``

export default function Section(props) {
    return (
        <Container>
            <Font.H4>{props.title}</Font.H4>

            {props.children && !props.img && props.children}

            {props.img && !props.children && (
                <Image src={`/images/${props.img}`} alt={props.altImg} />
            )}

            {props.img && props.children && (
                <Grid>
                    <Col>{props.children}</Col>

                    <Col>
                        <Image
                            src={`/images/${props.img}`}
                            alt={props.altImg}
                        />
                    </Col>
                </Grid>
            )}
        </Container>
    )
}
