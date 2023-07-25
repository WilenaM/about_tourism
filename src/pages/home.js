import HomeHeading from "../componets/homeHeading";
import WhyChoose from "../componets/whyChoose/whyChoose";
import HomeDestinations from "../componets/homeDestinations/homeDestinations"; 
import TravelAdvice from "../componets/travelAdvaise/travAdvice";
import NewsTourism from "../componets/news/news";



function Home() {
    return (
        <main className="home">
        <HomeHeading />
        <WhyChoose />
        <HomeDestinations />
        <TravelAdvice/>
        <NewsTourism/>
      </main>
    )
}

export default Home;