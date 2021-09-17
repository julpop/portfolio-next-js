// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Data
import SocialLinks from "../../content/SocialLinks"

// Styles
const Container = styled.ul`
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
        color: ${Variables.Colors.Gray};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Red};

            @media ${Variables.Breakpoints.Touch} {
                color: ${Variables.Colors.Gray};
            }
        }
    }

    ${props =>
        props.cover &&
        css`
            position: absolute;
            left: 5vw;
            height: 100vh;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            z-index: 10;

            @media ${Variables.Breakpoints.Tablet} {
                display: none;
            }
        `}
`

export default function Social(props) {
    return (
        <Container {...props}>
            {SocialLinks.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name={item.name} size={20} color="currentColor" />
                    </a>
                </li>
            ))}
        </Container>
    )
}
