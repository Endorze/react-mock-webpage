import Footer from "../../components/Footer/footer";
import HeroSubsection from "../../components/HeroSubsection/heroSubsection";
import HomeHero from "../../components/HomeHero/homeHero";
import MainContent from "../../components/MainContent/mainContent";

const Home = () => {
    return <div className="homeContainer">
        <HomeHero />
        <HeroSubsection />
        <MainContent />
        <Footer />
    </div>
}

export default Home;