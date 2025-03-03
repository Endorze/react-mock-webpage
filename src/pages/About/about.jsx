import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import ImageSection from "../../components/ImageSection/imageSection";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";


const About = () => {
    return <div>
        <ImageSection imagePath={"/image/about/fallout76.jpg"}/>
        <CareerSection />
        <LatestNews />
        <Divider />
        <LocationSection />
        <Footer />
    </div>
}

export default About;