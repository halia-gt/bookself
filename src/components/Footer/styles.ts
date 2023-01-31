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
    background-color: #fdfdfd;
    width: calc(50% - 55px);
    height: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -4px 6px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`;

const NavMid = styled.nav`
    background-color: #fdfdfd;
    width: 110px;
    height: 60px;
    margin-top: 20px;
    border-top: 1px white;
    position: relative;

    div {
        background-color: var(--main-white);
        width: 110px;
        height: 55px;
        border-radius: 0 0 110px 110px;
        box-shadow: inset 0 -4px 6px 2px rgba(0, 0, 0, 0.05);
    }

    button {
        height: 90px;
        width: 90px;
        background-color: var(--accent-color);
        position: absolute;
        left: calc(50% - 45px);
        border-radius: 50%;
        bottom: calc(60px - 55px + 10px);
        box-shadow: 0 -4px 6px 2px rgba(0, 0, 0, 0.05);
        font-size: 1rem;
        font-weight: 700;
        color: var(--main-white);
    }
`;

const HomeWrapper = styled.div<{
        home?: boolean,
        shelf?: boolean,
        top?: boolean,
        add?: boolean
    }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.home ? "var(--main-color)" : "var(--neutral-color)"};
    font-size: 0.8rem;

    svg {
        font-size: 30px;
        margin-bottom: 0.3rem;
    }
`;

const ShelfWrapper = styled(HomeWrapper)`
    color: ${props => props.shelf ? "var(--main-color)" : "var(--neutral-color)"};
`;

const TopWrapper = styled(HomeWrapper)`
    color: ${props => props.top ? "var(--main-color)" : "var(--neutral-color)"};
`;

const AddWrapper = styled(HomeWrapper)`
    color: ${props => props.add ? "var(--main-color)" : "var(--neutral-color)"};
`;

export {
    Wrapper,
    NavWrapper,
    NavMid,
    HomeWrapper,
    ShelfWrapper,
    TopWrapper,
    AddWrapper,
};