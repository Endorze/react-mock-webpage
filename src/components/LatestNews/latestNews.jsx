import NewsItem from "../NewsItem/newsItem";
import Wrapper from "../Wrapper/wrapper";
import styles from "./latestNews.module.css"
import img1 from "../../../public/image/powerarmor.png"
import img2 from "../../../public/image/synth.png"
import img3 from "../../../public/image/dogmeat.jpg"
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay";
import Button from "../Button/button";

const LatestNews = () => {
    return (
        <Wrapper>
            <h3 className={styles.wastelandTitle}>Latest news of the Wasteland</h3>
            <HorizontalDisplay>
                <NewsItem imgPath={img1} title={"T-45 Power Armor: A Stalwart Relic"} date={"By Vault-Tec News Network – February 26, 2025"} text={"In the post-apocalyptic wasteland of the Commonwealth, survival hinges on the strength of the individual—and nothing symbolizes resilience quite like the T-45 Power Armor..."} />
                <NewsItem imgPath={img2} title={"Are the Synths taking it too far?"} date={"By Vault-Tec News Network – February 26, 2025"} text={"For years, the presence of synthetic humanoids—better known as Synths—has been a topic of intense debate in the Commonwealth. Created by the Institute..."}/>
                <NewsItem imgPath={img3} title={"The cute side of the Wasteland"} date={"By Vault-Tec News Network – February 26, 2025"} text={"In the harsh and unforgiving landscape of the wasteland, few survive without a loyal friend by their side. For the Lone Wanderer—known to some as Blueboy..."} />
            </HorizontalDisplay>
                <div className={styles.buttonDiv}>
            <Button buttonText={"More News"}/>
            </div>
        </Wrapper>
    )
}

export default LatestNews;