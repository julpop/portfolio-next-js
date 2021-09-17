// Packages
import styled, { css } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
export const H1 = styled.h1`
    font-family: ${Variables.FontFamilies.Title};
    font-weight: ${Variables.FontWeights.Black};
    font-size: 50px;

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 30px;
    }

    .break {
        display: none;

        @media ${Variables.Breakpoints.Tablet} {
            display: inherit;
        }
    }

    .typed-cursor {
        color: ${Variables.Colors.Red};
    }

    ${props =>
        props.hidden &&
        css`
            position: fixed;
            top: -999em;
            left: -999em;
        `}
`

export const H2 = styled.h2`
    font-family: ${Variables.FontFamilies.Body};
    font-weight: ${Variables.FontWeights.Regular};
    font-size: 20px;

    ${props =>
        props.subtitle &&
        css`
            text-transform: uppercase;
            color: ${Variables.Colors.Gray};
        `}
`

export const H3 = styled.h3`
    font-family: ${Variables.FontFamilies.Title};
    font-weight: ${Variables.FontWeights.Bold};
    font-size: 30px;
`

export const H4 = styled.h4`
    font-family: ${Variables.FontFamilies.Body};
    font-weight: ${Variables.FontWeights.Semibold};
    text-transform: uppercase;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 22px;
    position: relative;

    &:after {
        content: "";
        width: 50px;
        height: 2px;
        float: left;
        background-color: ${Variables.Colors.LightGray};
        position: absolute;
        left: 0;
        bottom: -2px;
    }
`
