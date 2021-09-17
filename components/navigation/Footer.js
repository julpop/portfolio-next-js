// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Social from "./Social"

// Data
import SiteData from "../../content/SiteData"
import FooterUi from "../../content/FooterUi"

// Styles
const Container = styled.footer`
    position: relative;
    z-index: 1;
    background-color: ${Variables.Colors.White};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 5vw;

    &:before {
        content: "";
        width: 200px;
        height: 2px;
        background-color: ${Variables.Colors.Gray};
        position: absolute;
        top: 0;
        left: calc(50% - 100px);
    }

    ul,
    p:first-of-type {
        margin-bottom: 20px;
    }

    p {
        text-align: center;

        a {
            color: ${Variables.Colors.Gray};

            &:hover {
                color: ${Variables.Colors.Red};

                @media ${Variables.Breakpoints.Touch} {
                    color: ${Variables.Colors.Gray};
                }
            }
        }
    }
`

export default function Footer() {
    return (
        <Container>
            <Social />

            <p>
               {FooterUi.TextCopy} <a href={SiteData.siteDevSite} target="_blank" rel="noopener noreferrer">{SiteData.siteDevName}</a>
            </p>

            <p>
                {SiteData.siteAuthor} &copy;{SiteData.siteYear}
            </p>
        </Container>
    )
}
