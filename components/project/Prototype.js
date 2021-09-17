// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Button from "../ui/Button"
import Image from "../ui/Image"
import Icon from "../ui/Icon"
import ProjectUi from "../../content/ProjectUi"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    position: fixed;
    top: 50vh;
    left: 50vw;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 51, 51, 0.8);
    transition: ${Variables.Transitions.Long};

    iframe {
        opacity: 0;
        transition: ${Variables.Transitions.Long};
        width: 80%;
        height: 80%;
        transition-delay: 0.6s;
        visibility: none;
    }

    .Close {
        position: absolute;
        right: 5vw;
        top: 50px;
        cursor: pointer;
        opacity: 0;
        transition: ${Variables.Transitions.Long};
        transition-delay: 0.6s;
    }

    &.ModalOpen {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        iframe,
        .Close {
            opacity: 1;
        }
    }
`

export default function Prototype(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const ModalOpen = isModalOpen ? "ModalOpen" : ""

    const [isStopped, setIsStopped] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("stop-scrolling", isStopped)
        document.querySelector("header").classList.toggle("hidden", isStopped)
    }, [isStopped])

    return (
        <Container>
            <Font.H4>{props.title}</Font.H4>

            <Image
                src={`/images/${props.img}`}
                alt={props.altImg}
                shadow={props.shadow}
            />

            <ButtonContainer>
                <Button
                    onClick={() => {
                        setIsModalOpen(!isModalOpen)
                        setIsStopped(!isStopped)
                    }}
                >
                    {ProjectUi.TextButtonPrototype}
                </Button>
            </ButtonContainer>

            <Modal
                className={ModalOpen}
                onClick={() => {
                    setIsModalOpen(!isModalOpen)
                    setIsStopped(!isStopped)
                }}
            >
                <Icon
                    name="close"
                    color={Variables.Colors.White}
                    size={20}
                    className="Close"
                />

                <iframe
                    src={props.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Modal>
        </Container>
    )
}
