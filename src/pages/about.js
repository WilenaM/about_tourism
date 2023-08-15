import HomeHeading from "../componets/homeHeading";
import AboutMySito from "../componets/aboutMySito/aboutMySito";
import { useState, useEffect } from "react";




function AboutSito() {
  const [data, setData] = useState({
    heading: {},
    about: {
      biography: {},
      myself: {
        text: []
      },
    }
  })

  useEffect(() => {
    fetch(`json/about.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
      })
  }, [])

  return (
    <main className="">
      <HomeHeading {...data.heading} />
      <AboutMySito {...data.about} />
    </main>
  )
}

export default AboutSito;