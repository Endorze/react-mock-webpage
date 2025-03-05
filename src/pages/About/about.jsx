import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import GridTextImageSection from "../../components/GridTextImageSection/gridTextImageSection";
import LocationSection from "../../components/LocationSection/locationSection";
import ProfileSection from "../../components/ProfileSection/profileSection";
import HeroSubsection from "../../components/HeroSubsection/heroSubsection";
import DoubleTextSection from "../../components/DoubleTextSection/doubleTextSection";


const About = () => {
    return <div>
        <Divider />
        <GridTextImageSection />
        <Divider />
        <HeroSubsection />
        <Divider />
        <ProfileSection />
        <DoubleTextSection />
        <Divider />
        <LocationSection />
        <Footer />
    </div>
}

export default About;