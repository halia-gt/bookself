import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;
`;

const MainStatsWrapper = styled.section`
    width: 100%;
    margin-top: 1rem;
`;

const PrimaryContainer = styled.div`
    height: 180px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const DataWrapper = styled.div`
    background-color: var(--white-background);
    padding: 0.8rem;
    border-radius: 15px;
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.2);
    color: var(--text-black);
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: var(--text-black);

    & > h6 {
        font-weight: 700;
        font-size: 1.2rem;
    }

    & > p {
        text-align: end;
    }
`;

const MainData = styled(DataWrapper)`
    width: 48%;
    height: 170px;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 4%;

    & > h6 {
        font-size: 5rem;
    }

    & > p {
        font-size: 1.2rem;
        text-transform: uppercase;
    }
`;

const SecondaryData = styled(DataWrapper)`
    width: 48%;
    height: 50px;
    justify-content: space-between;
`;

const SecondaryContainer = styled(PrimaryContainer)`
    height: 130px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const MinorData = styled(DataWrapper)`
    width: 48%;
    margin-right: 4%;
    height: 60px;
    justify-content: space-between;

    &:nth-child(2n) {
        margin-right: 0;
    }
`;

const OwnedCard = styled(DataWrapper)`
    width: 100%;
    height: 70px;
    justify-content: space-between;
    margin-top: 10px;
    
    & > p {
        text-transform: uppercase;
        margin-left: 0.8rem;
    }

    & > h6 {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-right: 0.8rem;
    }
`;

const FavoriteBook = styled(DataWrapper)`
    width: 100%;
    height: 100px;
    background-color: var(--main-color);
    color: var(--main-white);
    flex-direction: column;
    justify-content: space-around;
    margin: 10px 0;

    & > h6 {
        font-style: italic;
        font-size: 2rem;
    }

    & > p {
        font-size: 1.2rem;
    }
`;

export {
    Wrapper,
    MainStatsWrapper,
    PrimaryContainer,
    MainData,
    SecondaryData,
    SecondaryContainer,
    MinorData,
    OwnedCard,
    FavoriteBook,
};