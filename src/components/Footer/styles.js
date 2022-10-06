import styled from "styled-components";

const Wrapper = styled.footer`
    display: flex;
    position: fixed;
    height: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const NavWrapper = styled.nav`
    background-color: #FFFFFF;
    width: calc(50% - 55px);
    height: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
`;

const NavMid = styled.nav`
    background-color: #FFFFFF;
    width: 110px;
    height: 60px;
    margin-top: 20px;
    border-top: 1px white;
    position: relative;

    div {
        background-color: #F0F0F0;
        width: 110px;
        height: 55px;
        border-radius: 0 0 110px 110px;
        box-shadow: inset 0 -4px 6px 2px rgba(0, 0, 0, 0.05);
    }

    button {
        height: 90px;
        width: 90px;
        background-color: #FFB5B5;
        position: absolute;
        left: calc(50% - 45px);
        border-radius: 50%;
        bottom: calc(60px - 55px + 10px);
        box-shadow: 0 -4px 6px 2px rgba(0, 0, 0, 0.05);
    }
`;

export {
    Wrapper,
    NavWrapper,
    NavMid
};