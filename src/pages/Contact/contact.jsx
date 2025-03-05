import CareerSection from "../../components/CareerSection/careerSection";
import Footer from "../../components/Footer/footer";
import LocationSection from "../../components/LocationSection/locationSection";
import ImageSection from "../../components/ImageSection/imageSection";
import styles from "./contact.module.css"
import FaqSection from "../../components/FaqSection/faqSection";
import Wrapper from "../../components/Wrapper/wrapper";


const Contact = () => {
    return <div className={styles.contactBody}>
        <ImageSection imagePath={"https://media.istockphoto.com/id/1281041623/vector/studio-room-background.jpg?s=612x612&w=0&k=20&c=sa4Cmfav9HqximETEl9AuMy5BkMNgwu9c-b4apMm4rA="} children={[<div className={styles.vertical}><h3>Do You Require Our Assistance?</h3> <h2>Don't hesitate <br/>Contact us Today</h2> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ipsam eligendi iusto corporis numquam libero tenetur. Rerum suscipit culpa animi sit ipsa quia vel, qui consequatur molestiae eos, unde id.</p></div>, <div><img src="https://t4.ftcdn.net/jpg/03/94/92/45/360_F_394924536_HjarbK1OKgvEyX67GMXVo8mvR0OlaKli.jpg" /></div>]}/>
        <FaqSection />
        <div className={styles.career}>
            <CareerSection />
        </div>
        <LocationSection />
        <Footer />
    </div>
}

export default Contact;