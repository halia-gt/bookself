import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    
    & > img {
        height: 20vh;
        margin-right: 1.2rem;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
    }

    & > div {
        display: flex;
        flex-direction: column;
        color: var(--main-white);
    }

    & > div > h2 {
        font-weight: 700;
        font-size: 1.5rem;
        font-family: "Libre Baskerville", serif;
        margin-bottom: .6rem;
    }

    & > div > h3 {
        font-size: 1.1rem;
        margin-bottom: 2vh;
    }


    & > div > div {
        display: flex;
        margin-top: 1rem;
    }

    & > div > div:nth-child(3) {
        display: flex;
        margin-top: 1rem;
        align-items: center;
    }

    & > div > div > p {
        font-weight: 700;
        color: var(--star-color);
        margin-left: 8px;
        font-size: 1.2rem;
    }

    & > div > div > span {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--main-white);
        padding: .4rem 1rem;
        border-radius: 17px;
        margin-right: 10px;
        text-align: center;
    }
`;

export {
    Wrapper,
};