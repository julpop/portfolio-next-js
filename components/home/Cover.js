// Packages
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Typed from "typed.js"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Picture from "../ui/Picture"
import Social from "../navigation/Social"
import Button from "../ui/Button"

// Data
import ContentHome from "../../content/ContentHome"

// Styles
const Container = styled.div`
    position: relative;
    padding: 50px 5vw;
    width: 100vw;
    height: 100vh;
`

const Image = styled(Picture)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`

const Subtitle = styled(Font.H2)`
    position: relative;
    width: auto;
    margin-bottom: 50px;
    text-align: center;

    &:after {
        content: "";
        --width: 100px;
        width: var(--width);
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: calc(50% - var(--width) / 2);
        background-color: ${Variables.Colors.Gray};
    }

    @media (max-width: 600px) {
        padding: 0 10vw;
    }
`
const Title = styled(Font.H1)`
    text-align: center;
    margin-bottom: 50px;
    line-height: 65px;

    @media ${Variables.Breakpoints.Mobile} {
        padding: 0 10vw;
        line-height: 45px;
    }
`

const TypedContent = styled.span`
    color: ${Variables.Colors.Red};
    white-space: pre;
`

export default function Cover(props) {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ContentHome.Typed,
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 1000,
            loop: true,
            loopCount: Infinity,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <Container>
            <Image
                src={ContentHome.Background}
                alt={ContentHome.AltBackground}
            />

            <Content>
                <Subtitle subtitle>{ContentHome.Subtitle}</Subtitle>

                <Title>
                    {ContentHome.Title1}
                    <br className="break" /> <TypedContent ref={el} />
                    <br />
                    {ContentHome.Title2}
                </Title>

                <Button href="/#portfolio">{ContentHome.TextButton}</Button>
            </Content>

            <Social cover />
        </Container>
    )
}
