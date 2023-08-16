import HomeHeading from "../componets/homeHeading";
import { useEffect, useState } from "react";
import CountrySum from "../componets/countrySumary/contrySummary";
import CountrySection from "../componets/countrySection/countrySection";
import { useParams } from "react-router";
import Error404 from "../componets/error404/error404";

function Country() {

  const {countryName} = useParams();

  const [data, setData] = useState({heading: {}, summary: {}, sections: []});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`json/countries/${countryName}.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
        setError(false);
      }).catch(error=> {
        setError(true);
        setData({heading: {}, summary: {}, sections: []});
        console.error(error);

      })
  }, [countryName])

  return !error ? (
    <main className="destin_italy">
      <HomeHeading {...data.heading} />
      <CountrySum {...data.summary} />
      {data.sections.map((section) => (
        <CountrySection key={section.id} {...section}/>
      ))}
    </main>
  ) : (<Error404/>)
}

export default Country;