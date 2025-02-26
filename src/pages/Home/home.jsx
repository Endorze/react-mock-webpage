import CareerSection from "../../components/CareerSection/careerSection";
import Footer from "../../components/Footer/footer";
import HeroSubsection from "../../components/HeroSubsection/heroSubsection";
import HomeHero from "../../components/HomeHero/homeHero";
import LatestNews from "../../components/LatestNews/latestNews";
import MainContent from "../../components/MainContent/mainContent";
import Overview from "../../components/Overview/overview";

const Home = () => {
    return <div className="homeContainer">
        <HomeHero />
        <HeroSubsection />
        <CareerSection />
        <LatestNews />
        <Overview overviewTitle={"Award-Winning & Groundbreaking"} overviewText={"Bethesda Game Studios is the award-winning development team known around the world for their groundbreaking work on The Elder Scrolls and Fallout series. One of the industry's most accomplished studios and developers of four Game of the Year award-winning titles including The Elder Scrolls IV: Oblivion, Fallout 3, The Elder Scrolls V: Skyrim, and Fallout 4. Starfield is Bethesda Game Studio's first new universe in 25 years and garnered 10 million players in less than three weeks of its release, making it the biggest launch in the studio's history. Bethesda Games Studios is now in preproduction on the highly anticipated The Elder Scrolls VI."}/>
        <Footer />
    </div>
}

export default Home;