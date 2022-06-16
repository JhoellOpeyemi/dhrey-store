import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .4s;
    }

    *:focus {
        outline: 2px dashed ${({ theme }) => theme.colors.pryColor};
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: ${({ theme }) => theme.colors.bodyBg};
        overflow-x: hidden;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
    }

    h1,h2,h3,h4,h5 {
        line-height: 1.2;
    }

    p {
        line-height: 1.6;
    }

    a {
        display: inline-block;
        text-decoration: none;
        margin: 0.2rem;
        color: ${({ theme }) => theme.colors.text};

    }

    li {
        list-style-type: none;
    }

    button {
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        background: none;
        border: none;
    }

    span {
        display: inline-block;
    }
`;

export default GlobalStyles;
