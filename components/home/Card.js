// Packages
import React from "react"
import styled, { css } from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Image from "../ui/Image"
import ButtonArrow from "../ui/ButtonArrow"

// Content
import ContentHome from "../../content/ContentHome"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    &:nth-child(even) {
        grid-auto-flow: column;
        .Col:first-of-type {
            grid-column: 2;
        }

        .Col:last-of-type {
            grid-column: 1;
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(1, 1fr);

        &:nth-child(even) {
            grid-auto-flow: column;

            .Col:first-of-type {
                grid-column: 1;
            }

            .Col:last-of-type {
                grid-column: 1;
            }
        }
    }
`

const Col = styled.div`
    ${props =>
        props.colImg &&
        css`
            img {
                width: 100%;
                height: 50vh;
                object-fit: contain;
                transition: ${Variables.Transitions.Short};

                &:hover {
                    transform: scale(1.1);

                    @media ${Variables.Breakpoints.Touch} {
                        transform: scale(0);
                    }
                }
            }
        `}

    ${props =>
        props.colText &&
        css`
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
        `}
`

const Desc = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export default function Card(props) {
    return (
        <Container>
            <Col className="Col" colImg>
                <Link
                    href={props.url ? props.url : "/project/"}
                    ext={props.url ? true : ""}
                    passHref
                    {...props}
                >
                    <a target={props.site ? "_blank" : ""}>
                        <Image
                            src={`/images/${props.img}`}
                            alt={`Cover ${props.title}`}
                        />
                    </a>
                </Link>
            </Col>

            <Col className="Col" colText>
                <Font.H4>{props.subtitle}</Font.H4>

                <Desc>
                    <Font.H3>{props.title}</Font.H3>

                    <p>{props.children}</p>
                </Desc>

                <ButtonContainer>
                    {props.site ? (
                        <ButtonArrow ext href={props.url}>
                            {ContentHome.TextButtonCardExter} {props.site}
                        </ButtonArrow>
                    ) : (
                        <ButtonArrow href={props.url} {...props}>
                            {ContentHome.TextButtonCard}
                        </ButtonArrow>
                    )}
                </ButtonContainer>
            </Col>
        </Container>
    )
}
