import styles from "./faqSection.module.css"
import Container from "../Container/container.jsx"
import FaqItem from "../FaqItem/faqItem";

const FaqSection = () => {
    return (
        <div>
            <Container>
                <div className={styles.horizontal}>
                    <FaqItem imagePath={"/image/contact/faqImages/chaticon.png"} title={"Chat with our AI-Assistance"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit numquam debitis architecto vero dignissimos odit, temporibus totam fuga accusantium at, modi sapiente incidunt eos aliquid ad eum quaerat eius!"}/>
                    <FaqItem imagePath={"/image/contact/faqImages/personicon.png"} title={"Voice your Complaints here"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit numquam debitis architecto vero dignissimos odit, temporibus totam fuga accusantium at, modi sapiente incidunt eos aliquid ad eum quaerat eius!"}/>
                    <FaqItem imagePath={"/image/contact/faqImages/phoneicon.png"} title={"Talk to one of our Crew"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit numquam debitis architecto vero dignissimos odit, temporibus totam fuga accusantium at, modi sapiente incidunt eos aliquid ad eum quaerat eius!"}/>
                </div>
            </Container>
        </div>
    )
}

export default FaqSection;