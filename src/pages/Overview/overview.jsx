import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";
import GridTextImageSection from "../../components/GridTextImageSection/gridTextImageSection";
import VideoSection from "../../components/VideoSection/videoSection";


const Overview = () => {
    return (
        <div>
            <ImageSection imagePath={"/image/overview/fallout.jpg"}/>
            <Divider />
            <GridTextImageSection />
            <Divider />
            <VideoSection videoLink={"https://www.youtube.com/embed/0kQ8i2FpRDk?si=q0-x1pNcmF4-NtqH"} title1={"Fallout - The new Series"} title2={"Where can i watch Fallout?"} 
            description1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates error itaque consectetur officia. Eaque voluptatem ipsa autem magni fuga pariatur doloremque, placeat corporis id, assumenda nam provident culpa expedita?"}
            description2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates error itaque consectetur officia. Eaque voluptatem ipsa autem magni fuga pariatur doloremque, placeat corporis id, assumenda nam provident culpa expedita?"}
            />
            <LocationSection />
            <Footer />
        </div>
    )
}

export default Overview;