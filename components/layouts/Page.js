// Packages
import React from "react"
import styled from "styled-components"

// Components
import AppHead from "../AppHead"
import Header from "../navigation/Header"
import Footer from "../navigation/Footer"

// Styles
import GlobalStyles from "../styles/GlobalStyles"

export default function Page(props) {
    return (
        <>
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.description}
            />

            <GlobalStyles />

            <Header white={props.white} />

            {props.children}

            <Footer />
        </>
    )
}
