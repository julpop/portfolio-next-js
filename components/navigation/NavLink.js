// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.li`
    transition: ${Variables.Transitions.Short};
    font-size: 50px;
    text-transform: uppercase;
    font-family: ${Variables.FontFamilies.Title};
    font-weight: ${Variables.FontWeights.Black};
    transform: translateX(-10px);
    opacity: 0;

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 30px;
    }

    &:not(:last-of-type) {
        margin-bottom: 10px;
    }

    &:first-child {
        transition-delay: 1.5s;
    }

    &:nth-child(2) {
        transition-delay: 1.7s;
    }

    &:nth-child(3) {
        transition-delay: 1.9s;
    }
`

const LinkStyled = styled.a`
    color: ${Variables.Colors.Gray};
    text-decoration: none;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: 50%;
        right: 50%;
        top: calc(50% - 1px);
        width: 0;
        height: 2px;
        background-color: ${Variables.Colors.Gray};
        transition: ${Variables.Transitions.Short};
    }

    &:hover:after {
        width: 100%;
        left: 0;
        right: 0;

        @media ${Variables.Breakpoints.Touch} {
            width: 0;
        }
    }
`

export default function NavLink(props) {
    return (
        <Container>
            <Link href={props.href} {...props} passHref>
                <LinkStyled>{props.children}</LinkStyled>
            </Link>
        </Container>
    )
}
