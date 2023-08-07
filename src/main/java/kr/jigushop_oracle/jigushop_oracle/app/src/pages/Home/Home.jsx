import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Home/Banner/Banner";
import MainDisplayBest from "../../components/Home/MainDisplayBest/MainDisplayBest";
import MainDisplayMission from "../../components/Home/MainDisplayMission/MainDisplayMission";
import MainDisplayNew from "../../components/Home/MainDisplayNew/MainDisplayNew";
import MainDisplayNews from "../../components/Home/MainDisplayNews/MainDisplayNews";
import MainDisplaySNS from "../../components/Home/MainDisplaySNS/MainDisplaySNS";
import Nav from "../../components/Nav/Nav";

export default function Home() {
    const homeStyles = {
        background: "#646464"
    }
    return (
        <>
            <Nav />
            
            <Banner/>
            <MainDisplayBest/>
            <MainDisplayNews/>
            <MainDisplayNew/>
            <MainDisplayMission/>
            <MainDisplaySNS />
            <hr style={homeStyles} />
            
            <Footer/>
        </>
    )
}