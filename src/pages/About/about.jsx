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
        <GridTextImageSection title1={"Get to know bethesda"} title2={"We're one of the Worlds Biggest Gaming Studios"} title3={"Eager to get to know our Crew?"} title4={"Why should i trust Bethesda?"} description1={"Behind every epic adventure, every immersive world, and every unforgettable story stands a team of passionate creators. At Bethesda, our crew is the heart of everything we do—artists, designers, engineers, and storytellers all working together to bring worlds to life... <"} 
            description2={"For decades, we've been crafting immersive worlds, unforgettable stories, and experiences that stay with players long after the credits roll. Our commitment to quality, innovation, and our incredible community drives everything we do. From The Elder Scrolls to Fallout and beyond, millions of players have embarked on journeys shaped by our passion for storytelling and gameplay. We stand by our work, listen to our players, and continuously push the boundaries of what’s possible in gaming."}
            buttonText={"Meet our Crew"}
            imagePath={"/image/about/oblivion.jpg"}
            buttonIdNav={"#team"}
            />
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