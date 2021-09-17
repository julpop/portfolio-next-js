// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.img`
    ${props =>
        props.shadow &&
        css`
            box-shadow: ${Variables.Shadow};
        `}
`

export default function Image(props) {
    return (
        <Container
            src={props.src}
            alt={props.alt}
            shadow={props.shadow}
            {...props}
        />
    )
}
