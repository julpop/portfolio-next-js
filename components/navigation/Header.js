// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Logo from "../ui/Logo"
import NavLink from "./NavLink"
import Social from "./Social"

// Data
import NavLinks from "../../content/NavLinks"

// Styles
const Container = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5vw;
    z-index: 997;

    &.hidden {
        display: none;
    }
`

const Burger = styled.div`
    width: 32px;
    height: 21px;
    position: fixed;
    z-index: 999;
    cursor: pointer;
    right: 5vw;

    span {
        width: 100%;
        height: 3px;
        background-color: ${props =>
            props.white ? Variables.Colors.White : Variables.Colors.Gray};
        position: absolute;
        left: 0;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - 1.5px);
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.BurgerOpen span {
        background-color: ${Variables.Colors.Gray};

        &:first-child {
            transform: rotate(45deg);
            top: 45%;
        }

        &:nth-child(2) {
            width: 0;
        }

        &:last-child {
            transform: rotate(-45deg);
            bottom: 45%;
        }
    }
`

const Nav = styled.nav`
    position: fixed;
    top: -100vh;
    left: 0;
    z-index: 998;
    background-color: ${Variables.Colors.White};
    width: 100vw;
    height: 100vh;
    transition: ${Variables.Transitions.Long};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &.NavOpen {
        top: 0;

        .Menu {
            li {
                transform: translateX(0);
                opacity: 1;
            }

            &:before,
            &:after {
                height: 100%;
            }

            .Border {
                width: 80px;
            }
        }

        .Social li {
            transform: translateX(0);
            opacity: 1;
        }
    }
`

const Links = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 50px 100px;
    margin-bottom: 50px;

    @media ${Variables.Breakpoints.Mobile} {
        padding: 50px;
    }

    &:before {
        content: "";
        height: 0;
        width: 2px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${Variables.Colors.Gray};
        transition: all 0.8s ease;
        transition-delay: 0.7s;
    }

    &:after {
        content: "";
        height: 0;
        width: 2px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${Variables.Colors.Gray};
        transition: all 0.8s ease;
        transition-delay: 0.7s;
    }
`

const Border = styled.span`
    width: 0;
    height: 2px;
    background-color: ${Variables.Colors.Gray};
    position: absolute;
    transition: ${Variables.Transitions.Short};

    &.TopLeft {
        top: 0;
        left: 0;
        transition-delay: 0.5s;
    }

    &.TopRight {
        top: 0;
        right: 0;
        transition-delay: 1.3s;
    }

    &.BottomLeft {
        bottom: 0;
        left: 0;
        transition-delay: 1.3s;
    }

    &.BottomRight {
        bottom: 0;
        right: 0;
        transition-delay: 0.5s;
    }
`

const SocialNav = styled(Social)`
    li {
        opacity: 0;
        transform: translateX(-10px);
        transition: ${Variables.Transitions.Short};

        &:not(:last-child) {
            margin-right: 20px;
        }

        &:first-child {
            transition-delay: 0.7s;
        }

        &:nth-child(2) {
            transition-delay: 0.9s;
        }

        &:nth-child(3) {
            transition-delay: 1.1s;
        }

        &:nth-child(4) {
            transition-delay: 1.3s;
        }
    }
`

// Borders
const Borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]

export default function Header(props) {
    // Nav
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const BurgerOpen = isBurgerOpen ? "BurgerOpen" : ""

    const [isNavOpen, setIsNavOpen] = useState(false)
    const NavOpen = isNavOpen ? "NavOpen" : ""

    const [isStopped, setIsStopped] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("stop-scrolling", isStopped)
    }, [isStopped])

    // Burger color on scroll
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < window.innerHeight - 35)
        })
    }, [])
    const BurgerWhite = scroll ? props.white : ""

    return (
        <Container>
            <Logo white={props.white} />

            <Burger
                className={BurgerOpen}
                onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen)
                    setIsNavOpen(!isNavOpen)
                    setIsStopped(!isStopped)
                }}
                white={BurgerWhite}
            >
                <span />
                <span />
                <span />
            </Burger>

            <Nav
                className={NavOpen}
                onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen)
                    setIsNavOpen(!isNavOpen)
                    setIsStopped(!isStopped)
                }}
            >
                <Links className="Menu">
                    {NavLinks.map((item, index) => (
                        <NavLink href={item.url} key={index}>
                            {item.title}
                        </NavLink>
                    ))}

                    {Borders.map((item, index) => (
                        <Border className={`Border ${item}`} key={index} />
                    ))}
                </Links>

                <SocialNav className="Social" />
            </Nav>
        </Container>
    )
}
