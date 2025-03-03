import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";


const Contact = () => {
    return <div>
        <ImageSection imagePath={"/image/contact/contactfallout.png"}/>
        <CareerSection />
        <LatestNews />
        <Divider />
        <LocationSection />
        <Footer />
    </div>
}

export default Contact;