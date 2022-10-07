import {
    IoHomeOutline,
    IoHome,
    IoLibraryOutline,
    IoLibrary,
    IoLayersOutline,
    IoLayers,
    IoRocketOutline,
    IoRocket,
} from "react-icons/io5";
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
    return(
        <Wrapper>
            <NavWrapper>
                <HomeWrapper home={home}>
                    {home ? <IoHome /> : <IoHomeOutline />}
                    Home
                </HomeWrapper>
                <ShelfWrapper shelf={shelf}>
                    {shelf ? <IoLibrary /> : <IoLibraryOutline />}
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
                    {series ? <IoLayers /> : <IoLayersOutline />}
                    Series
                </SeriesWrapper>
                <TBRWrapper tbr={tbr}>
                    {tbr ? <IoRocket /> : <IoRocketOutline />}
                    TBR
                </TBRWrapper>
            </NavWrapper>
        </Wrapper>
    );
}