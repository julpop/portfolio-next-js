// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Page from "./Page"
import Container from "./Container"
import Image from "../ui/Image"
import ButtonArrow from "../ui/ButtonArrow"
import Button from "../ui/Button"

// Data
import SiteData from "../../content/SiteData"

// Styles
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    align-items: center;

    @media ${Variables.Breakpoints.Mobile} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
    }
`

const Col = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    ${props =>
        props.colProfile &&
        css`
            justify-items: center;
        `}
`

const ProfilePicture = styled(Image)`
    --size: 25vw;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;

    @media ${Variables.Breakpoints.Mobile} {
        --size: 60vw;
    }
`

const ArrowContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a:not(:last-child) {
        margin-right: 20px;
    }

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;

        a:not(:last-child) {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`

export default function AboutTemplate(props) {
    return (
        <Page
            title={props.title}
            description={props.description}
            keywords={props.keywords}
        >
            <Container>
                <Grid>
                    <Col colProfile>
                        <ProfilePicture
                            src={`/images/${props.picture}`}
                            alt={`Picture ${SiteData.siteAuthor}`}
                        />
                    </Col>

                    <Col>
                        <Font.H1 hidden>
                            {props.title} {SiteData.siteAuthor}
                        </Font.H1>

                        <Font.H4>{props.title}</Font.H4>

                        {props.children}

                        <ArrowContainer>
                            <ButtonArrow href={`mailto:${SiteData.siteEmail}`}>
                                {props.textBtnChat}
                            </ButtonArrow>
                        </ArrowContainer>
                    </Col>
                </Grid>

                <ButtonsContainer>
                    {props.cv.map((item, index) => (
                        <Button
                            href={`/images/${item.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            {props.textCv} ({item.lang})
                        </Button>
                    ))}
                </ButtonsContainer>
            </Container>
        </Page>
    )
}
