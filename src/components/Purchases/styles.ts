import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;
    color: var(--text-black);

    & > div {
        background-color: var(--white-background);
        margin-top: 1rem;
        display: flex;
        padding: 0.6rem;
        border-radius: 15px;
        box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    & > div > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img {
        width: 90px;
        border-radius: 10px;
        box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
        margin-right: 1rem;
    }

    h4 {
        margin-top: .8rem;
        font-weight: bold;
        margin-bottom: .2rem;
        font-size: 1.2rem;
    }

    h6 {
        font-style: italic;
        margin-top: .4rem;
    }

    p {
        position: absolute;
        bottom: 1rem;
        right: 1.2rem;
        font-size: 1.2rem;
        color: var(--secondary-color);
        font-weight: bold;
    }
`;

export { Wrapper };