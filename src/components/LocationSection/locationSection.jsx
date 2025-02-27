import { useState } from "react";
import styles from "./locationSection.module.css"
import Wrapper from "../Wrapper/wrapper";
import Button from "../Button/button";
import LocationContent from "../LocationContent/locationContent";

const locations = {
    "Washington D.C.": {
        title: "Washington D.C.",
        description: "Bethesda Game Studios is located just twenty miles north of Washington, D.C. a hot spot for history, sports, politics, food, and music. From our award-winning restaurants and stadiums, to our world class museums, no matter what your taste, there’s always something exciting happening in the Nation's Capital.",
        categories: {
            Sports: ["Washington Football Team", "Washington Capitals", "Baltimore Ravens", "Baltimore Orioles", "Baltimore Ravens", "D.C United"],
            Restaurants: ["Komi", "Minibar", "Rose's Luxury", "Fiola Mare", "Rasika", "Birch and Barley", "Daikaya", "Iron Gate", "Woodberry Kitchen"],
            Museums: ["Air and Space Museum", "American Art Museum", "Portrait"],
            Nightlife: ["9:30 Club", "The Fillmore"]
        },
        backgroundImage: "/image/washington_dark_gray.jpeg"
    },

    "Montreal, Quebec": {
        title: "Montreal, Quebec",
        description: "Considered by many to be the cultural capital of Canada and the ‘Paris of North America’, Quebec is a lively mashup of contemporary North American and old world European style. Grand buildings, cobblestone streets, boutiques, and cafés, Quebec offers plenty of things to do and places to visit.",
        categories: {
            Sports: ["Washington Football Team", "Washington Capitals", "Baltimore Ravens"],
            Restaurants: ["Komi", "Minibar", "Rose's Luxury"],
            Museums: ["Air and Space Museum", "American Art Museum"],
            Nightlife: ["9:30 Club", "The Fillmore"]
        },
        backgroundImage: "/image/montreal_dark_gray.jpg"
    },

    "Austin, Texas": {
        title: "Austin, Texas",
        description: "Home to SXSW, Austin City Limits, 6th Street, art and film festivals, Austin is not only a hot spot for tech and culture, it's also the kind of place where you stop worrying and enjoy life. You want the best barbeque, microbrews, and live music packed into a little under 300 square miles? We got you covered. Here's a small taste of what the city has to offer:",
        categories: {
            Sports: ["Washington Football Team", "Washington Capitals", "Baltimore Ravens"],
            Restaurants: ["Komi", "Minibar", "Rose's Luxury"],
            Museums: ["Air and Space Museum", "American Art Museum"],
            Nightlife: ["9:30 Club", "The Fillmore"]
        },
        backgroundImage: "/image/austintexas_dark_gray.png"
    },

    "Dallas, Texas": {
        title: "Austin, Dallas",
        description: "A modern city in the state of Texas, Dallas is a thriving metropolitan area. With its affordable cost of living, fantastic schools and seemingly endless assortment of food and entertainment options, Dallas is a city that young professionals and growing families are proud to call home.",
        categories: {
            Sports: ["Washington Football Team", "Washington Capitals", "Baltimore Ravens"],
            Restaurants: ["Komi", "Minibar", "Rose's Luxury"],
            Museums: ["Air and Space Museum", "American Art Museum"],
            Nightlife: ["9:30 Club", "The Fillmore"]
        },
        backgroundImage: "/image/dallastexas_dark_gray.jpg"
    }
}


const LocationSection = () => {

    const [selectedLocation, setSelectedLocation] = useState("Washington D.C.")

    return (
            <div className={styles.locationBackground} style={{backgroundImage: `url(${locations[selectedLocation].backgroundImage})`, backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat"}}>
                <Wrapper>
                    <div className={styles.location}>
                        <h2 className={styles.locationHeader}>Locations</h2>
                        <nav className={styles.buttonWrap}>
                            {Object.keys(locations).map((location) => (
                            <Button 
                                key={location} 
                                className={`${styles.locationButton} ${selectedLocation === location ? styles.active : ""}`} 
                                onClick={() => {
                                console.log("Changing to:", location); 
                                setSelectedLocation(location)}
                            }
                            >
                                {location}
                            </Button>
                        ))}
                        </nav>
                    </div>
                    <div className={styles.categoryContent}>
                        <LocationContent {...locations[selectedLocation]} />
                    </div>
                </Wrapper>
            </div>
    )
}

export default LocationSection;