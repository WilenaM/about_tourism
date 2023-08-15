import HomeHeading from "../componets/homeHeading";
import WhyChoose from "../componets/whyChoose/whyChoose";
import HomeDestinations from "../componets/homeDestinations/homeDestinations"; 
import TravelAdvice from "../componets/travelAdvaise/travAdvice";
import NewsTourism from "../componets/news/news";
import { useState,useEffect } from "react";



function Home() {

  const [data, setData] = useState({
    heading: {},
    homeDestinations: [],
    advices: []
  })

  useEffect(() => {
    fetch(`json/home.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
      })
  }, [])

    return (
        <main className="home">
        <HomeHeading {...data.heading}/>
        <WhyChoose />
        <HomeDestinations items={data.homeDestinations}/>
        <TravelAdvice advices={data.advices}/>
        <NewsTourism/>
      </main>
    )
}

export default Home;