import Container from "../Container/container";
import ProfileItem from "../ProfileItem/profileItem";
import Wrapper from "../Wrapper/wrapper";
import styles from "./profileSection.module.css"

const ProfileSection = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    
                    <div id="team" className={styles.section}>
                        <ProfileItem imagePath={"/image/about/profile/alex.jpg"} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>   
                        <ProfileItem imagePath={"https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY="} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://www.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg"} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                        <ProfileItem imagePath={"https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg?semt=ais_hybrid"} name={"Alexander Hallgren"} description={"Nyaa nyaa morning beauty routine of licking self furrier and even more furrier hairball the fat cat sat on the mat bat away with paws meowwww."}/>
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
}

export default ProfileSection;