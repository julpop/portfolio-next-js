// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
        color: ${Variables.Colors.Gray};
        position: relative;
        scroll-behavior: smooth;
    }

    .stop-scrolling {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    h3 {
        font-family: ${Variables.FontFamilies.Title};
        font-weight: ${Variables.FontWeights.Bold};
        font-size: 30px;
    }

    h4 {
        font-family: ${Variables.FontFamilies.Body};
        font-weight: ${Variables.FontWeights.Semibold};
        text-transform: uppercase;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        font-size: 22px;
        position: relative;

        &:after {
            content: "";
            width: 50px;
            height: 2px;
            float: left;
            background-color: ${Variables.Colors.LightGray};
            position: absolute;
            left: 0;
            bottom: -2px;
        }
    }

    p {
        font-size: 16px;
        font-family: ${Variables.FontFamilies.Body};

        a {
            color: ${Variables.Colors.Red};
            font-weight: ${Variables.FontWeights.Bold};
            transition: ${Variables.Transitions.Short};
            text-decoration: none;

            &:hover {
                color: ${Variables.Colors.Blue};

                @media ${Variables.Breakpoints.Touch} {
                    color: ${Variables.Colors.Red};
                }
            }
        }
    }

    blockquote {
        background-color: rgba(67, 80, 88, 0.05);
        margin: 0 -24px;
        padding: 24px;

        p {
            font-size: 16px;
        }

        @media ${Variables.Breakpoints.Mobile} {
            margin: 0 0;
        }
    }
`

export default GlobalStyles
