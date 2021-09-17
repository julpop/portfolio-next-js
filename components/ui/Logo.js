// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"

// Data
import SiteData from "../../content/SiteData"

// Styles
const Container = styled.a`
    font-family: ${Variables.FontFamilies.Title};
    font-weight: ${Variables.FontWeights.Bold};
    text-decoration: none;
    color: ${props =>
        props.white ? Variables.Colors.White : Variables.Colors.Gray};
    font-size: 30px;
    transition: ${Variables.Transitions.Short};
    position: relative;
    z-index: 997;
`

export default function Logo(props) {
    return (
        <Link href="/" passHref>
            <Container white={props.white}>{SiteData.siteName}</Container>
        </Link>
    )
}
