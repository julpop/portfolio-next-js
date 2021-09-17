// Packages
import React from "react"

// Components
import ProjectTemplate from "../components/layouts/ProjectTemplate"
import Section from "../components/project/Section"
import Steps from "../components/project/Steps"
import Prototype from "../components/project/Prototype"

// Content
const Title = "Project page"
const Subtitle = "Subtitle"
const Intro =
    "A complete design of a modern, responsive website, playing the role of online porfolio."

export default function Project() {
    return (
        <ProjectTemplate
            title={Title}
            description=""
            keywords=""
            subtitle={Subtitle}
            img="sotonweb-cover.png"
            intro={Intro}
        >
            <Section title="Section with text">
                <p>
                    Blancc is a one-day music festival that takes place anually
                    in September in Texas, US. The event attracts people
                    listening to many different genres, but Blancc festival
                    specialize in pop and rock music. The festival has existed
                    since 90s.
                </p>
            </Section>

            <Section
                title="Section with image"
                img="blancc-style-tile.png"
                altImg="Alt"
            />

            <Section
                title="Section with text and image"
                img="blancc-logo.png"
                altImg="Alt"
            >
                <p>
                    Logo for a festival does not need a symbol alongside a
                    wordmark. The brand name on its own is enough, particularly
                    with a distinctive one, such as Blancc Music Festival. It
                    unites different genres celebrating cultural and musical
                    diversity. I created an elastic graphic identity that can
                    adapt to various circumstances and represent different
                    elements of the festival such as musical genres, location or
                    year.
                </p>
            </Section>

            <Steps
                title1="Challenge"
                content1="Design a ready-to-build microsite for a pop music festival that will take place this year."
                title2="Features"
                content2="To provide website clarity and an online point of sale."
                title3="Success metrics"
                content3="The project is successful if the users appreciate a seamless point-of-sale experience."
            />

            <Prototype
                title="Section prototype"
                img="blancc-homepage.png"
                altImg="Alt"
                video="https://www.youtube.com/embed/m8-6G-Ff15I"
                shadow
            />

            <blockquote>
                How Might We provide clarity during the navigation and checkout
                process on the webiste?
            </blockquote>
        </ProjectTemplate>
    )
}
