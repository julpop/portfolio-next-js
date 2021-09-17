// Packages
import React from "react"

// Components
import AboutTemplate from "../components/layouts/AboutTemplate"

// Page content
import { attributes, react as Content } from "../content/about.md"

export default function About() {
    let { title, keywords, desc, picture, textBtnChat, textCv, cv } = attributes
    return (
        <AboutTemplate
            title={title}
            keywords={keywords}
            description={desc}
            picture={picture}
            textCv={textCv}
            textBtnChat={textBtnChat}
            cv={cv}
        >
            <Content />
        </AboutTemplate>
    )
}
