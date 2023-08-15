import HomeHeading from "../componets/homeHeading";
import HomeDestinations from "../componets/homeDestinations/homeDestinations";
import { useEffect, useState } from "react";
import CountrySum from "../componets/countrySumary/contrySummary";
import CountrySection from "../componets/countrySection/countrySection";

function Country({ countryName }) {

  const [data, setData] = useState({heading: {}, summary: {}, sections: []});

  useEffect(() => {
    fetch(`json/countries/${countryName}.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
      })
  }, [countryName])

  return (
    <main className="destin_italy">
      <HomeHeading {...data.heading} />
      <CountrySum {...data.summary} />
      {data.sections.map((section) => (
        <CountrySection key={section.id} {...section}/>
      ))}
      {/* <DestinSummary/>
        {destinations.map((item) => (
          <DestinationsList key={item.id} {...item}/>
        ))} */}
    </main>
  )
}

export default Country;