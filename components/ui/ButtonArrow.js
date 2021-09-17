// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"
import Icon from "./Icon"

// Styles
const Container = styled.a`
    color: ${Variables.Colors.Gray};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    transition: ${Variables.Transitions.Short};

    .Icon {
        margin-left: 4px;
        transition: ${Variables.Transitions.Short};
    }

    &:hover {
        color: ${Variables.Colors.LightGray};

        .Icon {
            transform: rotate(-45deg);
        }

        @media ${Variables.Breakpoints.Touch} {
            color: ${Variables.Colors.Gray};

            .Icon {
                transform: rotate(0);
            }
        }
    }
`

export default function ButtonArrow(props) {
    return props.ext ? (
        <Container
            href={props.href}
            rel="noopener noreferrer"
            target="_blank"
            {...props}
        >
            {props.children}{" "}
            <Icon
                name="arrow"
                color="currentColor"
                size={20}
                className="Icon"
            />
        </Container>
    ) : (
        <Link href={props.href} passHref {...props}>
            <Container>
                {props.children}{" "}
                <Icon
                    name="arrow"
                    color="currentColor"
                    size={20}
                    className="Icon"
                />
            </Container>
        </Link>
    )
}
