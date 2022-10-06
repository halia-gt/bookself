import styled from "styled-components";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Wrapper>
                <header></header>
                <div className="image-container">
                    <img src="https://m.media-amazon.com/images/I/81pA6-hv+2L.jpg" alt="" />
                </div>
                <div className="main"></div>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.main`
    background-color: #407088;
    width: 100vw;
    height: 100vh;

    header {
        height: 30vh;
    }

    .image-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10vh;
    }

    img {
        object-fit: cover;
        width: 275px;
    }

    .main {
        background-color: white;
        height: 70vh;
        border-radius: 20px 20px 0 0;
        box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.1);
    }
`;