// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.button`
    background-color: ${Variables.Colors.Gray};
    padding: 15px 30px;
    color: ${Variables.Colors.White};
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${Variables.FontFamilies.Title};
    font-weight: ${Variables.FontWeights.Black};
    z-index: 1;
    position: relative;
    outline: none;
    border: none;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    font-size: 16px;
    text-align: center;

    &::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: ${Variables.Colors.Red};
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.45s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        &::before {
            transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);

            @media ${Variables.Breakpoints.Touch} {
                transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
            }
        }
    }
`

export default function Button(props) {
    return (
        <>
            {props.href ? (
                <Link href={props.href} passHref>
                    <Container as="a" {...props}>
                        {props.children}
                    </Container>
                </Link>
            ) : (
                <Container {...props}>{props.children}</Container>
            )}
        </>
    )
}
