import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";

const Location = () => {
    return (
        <div>
            <ImageSection imagePath={"https://images.ctfassets.net/rporu91m20dc/1UsMn9ffMzIC12y9mNntXI/2a488ebf4f2420a99851415d61b356a5/BethesdaStudio.png"}/>
            <CareerSection />
            <LatestNews />
            <Divider />
            <LocationSection />
            <Footer />
        </div>
    )
}

export default Location;