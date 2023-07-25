import HomeHeading from "../componets/homeHeading";
import WhyChoose from "../componets/whyChoose/whyChoose";
import HomeDestinations from "../componets/homeDestinations/homeDestinations"; 
import TravelAdvice from "../componets/travelAdvaise/travAdvice";
import NewsTourism from "../componets/news/news";



function Destinations() {
    return (
        <main className="destinations">
        <HomeHeading />
        <HomeDestinations />
      </main>
    )
}

export default Destinations;