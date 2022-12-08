import {
    IoHomeOutline,
    IoHome,
    IoLibraryOutline,
    IoLibrary,
    IoTrophyOutline,
    IoTrophy,
    IoSettingsOutline,
    IoSettings,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
    Wrapper,
    NavWrapper,
    NavMid,
    HomeWrapper,
    ShelfWrapper,
    SeriesWrapper,
    TBRWrapper
} from "./styles";

export default function Footer({ home = false, shelf = false, series = false, tbr = false }) {
    const navigate = useNavigate();

    return(
        <Wrapper>
            <NavWrapper>
                <HomeWrapper home={home}>
                    {home ? <IoHome /> : <IoHomeOutline onClick={() => {navigate('/')}} />}
                    Home
                </HomeWrapper>
                <ShelfWrapper shelf={shelf}>
                    {shelf ? <IoLibrary /> : <IoLibraryOutline onClick={() => {navigate('/shelves')}} />}
                    Shelves
                </ShelfWrapper>
            </NavWrapper>
            <NavMid>
                <button>
                    Stats
                </button>
                <div></div>
            </NavMid>
            <NavWrapper>
                <SeriesWrapper series={series}>
                    {series ? <IoTrophy /> : <IoTrophyOutline />}
                    Tops
                </SeriesWrapper>
                <TBRWrapper tbr={tbr}>
                    {tbr ? <IoSettings /> : <IoSettingsOutline />}
                    Settings
                </TBRWrapper>
            </NavWrapper>
        </Wrapper>
    );
}