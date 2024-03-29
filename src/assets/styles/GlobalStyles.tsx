import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        border: none;
    }
    
    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    :root {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        --main-white: #f0f0f0;
        --main-color: #407088;
        --secondary-color: #70ADB5;
        --neutral-color: #D1C9C0;
        --neutral-dark: #a89989;
        --accent-light: #FFE2E0;
        --accent-color: #FFB5B5;
        --text-black: #333333;
        --main-gray: #C5D4DB;
        --white-background: #fdfdfd;
        --accent-background: #ffcbcb;
        --star-color: #EE9F55;
    }
`;

export { GlobalStyles };