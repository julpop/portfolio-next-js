// Packages
import React from "react"
import styled, { css } from "styled-components"
import { ReactSVG } from "react-svg"

// Styles
const Container = styled(ReactSVG)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => `${props.size}px`};
        height: ${props => `${props.size}px`};
    }

    svg {
        fill: black;
        width: ${props => `${props.size}px`};
        height: ${props => `${props.size}px`};

        path {
            fill: ${props => props.color};
        }
    }
`

function Icon(props) {
    return (
        <Container
            src={`/icons/${props.name}.svg`}
            size={props.size}
            color={props.color}
            wrapper="span"
            {...props}
        />
    )
}

export default Icon

// How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon.js"
// Use the component
// <Icon name="name-of-icon" size="32px" color="color" />

export const IconMixin = ({ icon, size, color }) => css`
    content: "";
    mask: url("/icons/${icon}.svg") no-repeat 50% 50%;
    width: ${size};
    height: ${size};
    mask-size: cover;
    background-color: ${color};
    display: inline-block;
`

// How to use the mixin
// Import in the file you want to use this component
// import { IconMixin } from "/path/to/Icon.js"
// div:before {
//     ${IconMixin({
//         icon: "name-of-icon",
//         size: "12px",
//         color: "black",
//     })}
// }
