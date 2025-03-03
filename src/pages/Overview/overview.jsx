import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";


const Overview = () => {
    return (
        <div>
            <ImageSection imagePath={"/image/overview/fallout.jpg"}/>
            <CareerSection />
            <LatestNews />
            <Divider />
            <LocationSection />
            <Footer />
        </div>
    )
}

export default Overview;