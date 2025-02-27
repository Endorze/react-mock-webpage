import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import HeroSubsection from "../../components/HeroSubsection/heroSubsection";
import HomeHero from "../../components/HomeHero/homeHero";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import MainContent from "../../components/MainContent/mainContent";
import Overview from "../../components/Overview/overview";

const Home = () => {
    return <div className="homeContainer">
        <HomeHero />
        <HeroSubsection />
        <CareerSection />
        <LatestNews />
        <Overview overviewTitle={"Award-Winning & Groundbreaking"}><p><strong>Bethesda Game Studios</strong> is the award-winning development team known around the world for their groundbreaking work on <em><strong>The Elder Scrolls</strong></em> and <em><strong>Fallout</strong></em> series. One of the industry's most accomplished studios and developers of four "Game of the Year" award-winning titles including <em><strong>The Elder Scrolls IV: Oblivion</strong></em>, <em><strong>Fallout 3</strong></em>, <em><strong>The Elder Scrolls V: Skyrim</strong></em>, and <em><strong>Fallout 4</strong></em>. <em><strong>Starfield</strong></em> is Bethesda Game Studio's first new universe in 25 years and garnered 10 million players in less than three weeks of its release, making it the biggest launch in the studio's history. Bethesda Games Studios is now in preproduction on the highly anticipated <em><strong>The Elder Scrolls VI</strong></em>.</p></Overview>
        <Divider />
        <LocationSection />
        <Footer />
    </div>
}

export default Home;