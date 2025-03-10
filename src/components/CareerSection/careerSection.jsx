import CareerArticle from "../CareerArticle/careerArticle"
import Wrapper from "../Wrapper/wrapper";
import styles from "./careerSection.module.css"
import careerList from "../../../public/data/data";

const CareerSection = () => {
    return (
        <div className={styles.career}>
        <Wrapper>
            <h3 className={styles.careerh3}>Careers</h3>
            <div className={styles.careerItems}>
                {careerList.map((career) => (
                    <CareerArticle key={career.id} jobTitle={career.title} department={career.department} location={career.location}/>
                ))}

            </div>
            <div>
                <a href="#" className={styles.moreJobs}>More Jobs</a>
            </div>
        </Wrapper>
        </div>
    )
}

export default CareerSection;