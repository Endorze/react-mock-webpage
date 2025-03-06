import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LocationSection from "../../components/LocationSection/locationSection";
import GridTextImageSection from "../../components/GridTextImageSection/gridTextImageSection";
import VideoSection from "../../components/VideoSection/videoSection";
import MyMap from "../../components/MapContainer/MyMap";

const Overview = () => {
    return (
        <div>
            <Divider />
            <GridTextImageSection title1={"Watch our new Series"} title2={"Our series just won an Emmy-Award. Watch it today! "} title3={"What is the series all about?"} title4={"Will there be a second season?"} description1={"The Fallout series is a post-apocalyptic RPG set in a world where 1950s retro-futurism meets nuclear devastation. Players explore vast wastelands, battle mutants and factions, and shape the world through choices. With deep storytelling, dark humor, and immersive survival mechanics, Fallout offers a gripping journey through a broken yet resilient world."} 
            description2={"Fallout is officially renewed for Season 2 on Prime Video. Based on Bethesda's popular video game series of the same name, the post-apocalyptic story of life in America after nuclear war has captivated audiences. Following HBO's The Last of Us, it becomes the latest video game adaptation to score big with both fans and critics alike."}
            buttonText={"Watch trailer"}
            imagePath={"https://images.fallout.wiki/e/ee/FOTV_Marketing_Lucy_Poster.jpg"}
            buttonIdNav={"#trailer"}
            />
            <Divider />
            <VideoSection videoLink={"https://www.youtube.com/embed/0kQ8i2FpRDk?si=q0-x1pNcmF4-NtqH"} title1={"Fallout - The new Series"} title2={"Where can i watch Fallout?"} 
            description1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates error itaque consectetur officia. Eaque voluptatem ipsa autem magni fuga pariatur doloremque, placeat corporis id, assumenda nam provident culpa expedita?"}
            description2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates error itaque consectetur officia. Eaque voluptatem ipsa autem magni fuga pariatur doloremque, placeat corporis id, assumenda nam provident culpa expedita?"}
            />
            <MyMap />
            <LocationSection />
            <Footer />
        </div>
    )
}

export default Overview;