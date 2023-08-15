import HomeHeading from "../componets/homeHeading";
import DestinSummary from "../componets/destinSummary/destinSummary";
import DestinationsList from "../componets/destinList/destinList";
import { useState,useEffect } from "react";
 

function Destinations() {
  const [data, setData] = useState({
    heading: {},
    destinations: [],
  })

  useEffect(() => {
    fetch(`json/destinations.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
      })
  }, [])
    return (
        <main className="destinations">
        <HomeHeading {...data.heading}/>
        <DestinSummary/>
        {data.destinations.map((item) => (
          <DestinationsList key={item.id} {...item}/>
        ))}
      </main>
    )
}

export default Destinations;