import Footer from "../../components/Footer/footer";
import HomeHero from "../../components/HomeHero/homeHero";
import MainContent from "../../components/MainContent/mainContent";

const Home = () => {
    return <div className="homeContainer">
        <HomeHero />
        <MainContent />
        <Footer />
    </div>
}

export default Home;