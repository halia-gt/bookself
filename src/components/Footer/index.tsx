import {
    IoHomeOutline,
    IoHome,
    IoLibraryOutline,
    IoLibrary,
    IoTrophyOutline,
    IoTrophy,
    IoAddCircleOutline,
    IoAddCircle,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
    Wrapper,
    NavWrapper,
    NavMid,
    HomeWrapper,
    ShelfWrapper,
    TopWrapper,
    AddWrapper
} from "./styles";

export default function Footer({ home = false, shelf = false, top = false, add = false }) {
    const navigate = useNavigate();

    return(
        <Wrapper>
            <NavWrapper>
                <HomeWrapper home={home}>
                    {home ? <IoHome /> : <IoHomeOutline onClick={() => {navigate("/")}} />}
                    Home
                </HomeWrapper>
                <ShelfWrapper shelf={shelf}>
                    {shelf ? <IoLibrary /> : <IoLibraryOutline onClick={() => navigate("/shelves")} />}
                    Shelves
                </ShelfWrapper>
            </NavWrapper>
            <NavMid onClick={() => navigate("/stats")}>
                <button>
                    Stats
                </button>
                <div></div>
            </NavMid>
            <NavWrapper>
                <TopWrapper top={top}>
                    {top ? <IoTrophy /> : <IoTrophyOutline />}
                    Tops
                </TopWrapper>
                <AddWrapper add={add}>
                    {add ? <IoAddCircle /> : <IoAddCircleOutline onClick={() => navigate("/book/add")} />}
                    Add Book
                </AddWrapper>
            </NavWrapper>
        </Wrapper>
    );
}