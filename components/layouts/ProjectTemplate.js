// Packages
import React from "react"
import styled from "styled-components"

// Components
import Page from "./Page"
import Cover from "../project/Cover"
import Container from "./Container"
import ButtonArrow from "../ui/ButtonArrow"

// Content
import ProjectUi from "../../content/ProjectUi"

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default function ProjectTemplate(props) {
    return (
        <Page
            title={props.title}
            description={props.description}
            keywords={props.keywords}
            white
        >
            <Cover
                title={props.title}
                subtitle={props.subtitle}
                img={props.img}
                alt={`Cover ${props.title}`}
                text={props.intro}
            />

            <Container>
                {props.children}

                <ButtonContainer>
                    <ButtonArrow href={`/${props.next}/`}>
                        {ProjectUi.TextButtonNext}
                    </ButtonArrow>
                </ButtonContainer>
            </Container>
        </Page>
    )
}
