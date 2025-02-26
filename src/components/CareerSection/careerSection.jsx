import CareerArticle from "../CareerArticle/careerArticle"
import Wrapper from "../Wrapper/wrapper";
import styles from "./careerSection.module.css"

const CareerSection = () => {
    return (
        <div className={styles.career}>
        <Wrapper>
            <h3 className={styles.careerh3}>Careers</h3>
            <div className={styles.careerItems}>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
                    <CareerArticle jobTitle={"Programmer.se backend senior / Senior Backend Programmer"} department={"Department: Engineering/Programming"} location={"Location: Montreal, QC, CA"}/>
            </div>
            <div>
                <a href="#" className={styles.moreJobs}>More Jobs</a>
            </div>
        </Wrapper>
        </div>
    )
}

export default CareerSection;