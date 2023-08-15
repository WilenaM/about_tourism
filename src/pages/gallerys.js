
import Gallery from "../componets/gallery/gallery";
import HomeHeading from "../componets/homeHeading";
import { useState, useEffect } from "react";

function Gallerys() {
    const [data, setData] = useState({
        heading: {},
        images: []
      })
    
      useEffect(() => {
        fetch(`json/gallery.json`)
          .then(resp => resp.json())
          .then(resp => {
            console.log(resp)
            setData(resp);
          })
      }, [])

 return (
<main className="gallery">
        <HomeHeading {...data.heading} />
        <Gallery images={data.images}/>
        
      </main>
 )   
}

export default Gallerys;