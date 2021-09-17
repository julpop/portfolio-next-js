// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.picture``

export default function Picture(props) {
    return (
        <Container {...props}>
            <source
                media="(max-width: 600px)"
                srcSet={`/images/s-${props.src}`}
            />
            <source
                media="(max-width: 1024px)"
                srcSet={`/images/m-${props.src}`}
            />
            <img src={`/images/l-${props.src}`} alt={props.alt} />
        </Container>
    )
}
