import CareerSection from "../../components/CareerSection/careerSection";
import Divider from "../../components/Divider/divider";
import Footer from "../../components/Footer/footer";
import LatestNews from "../../components/LatestNews/latestNews";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";


const Contact = () => {
    return <div>
        <ImageSection imagePath={"https://media.istockphoto.com/id/1190166000/photo/mature-businessman-wearing-telephone-headset-talking-to-caller-in-customer-services-department.jpg?s=612x612&w=0&k=20&c=oNp2iOKT1rTLuoUdqsmM79RdiJTZV13Olj1aa1Gbdss="} children={[<h3>Do You Require Our Assistance?</h3>, <h2>Don't hesitate <br/>Contact us Today</h2>, <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ipsam eligendi iusto corporis numquam libero tenetur. Rerum suscipit culpa animi sit ipsa quia vel, qui consequatur molestiae eos, unde id.</p>]}/>
        <Divider />
        <LocationSection />
        <Footer />
    </div>
}

export default Contact;