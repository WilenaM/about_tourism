import HomeHeading from "../componets/homeHeading"; 
import GetInTouch from "../componets/getInTouch/touch";
import { useState, useEffect} from "react";


function Contacts() {
  const [data, setData] = useState({
    heading: {},
    
  })

  useEffect(() => {
    fetch(`json/contacts.json`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp);
      })
  }, [])
    return (
        <main className="contacts">
        <HomeHeading {...data.heading} />
        <GetInTouch/>
        
      </main>
    )
}

export default Contacts;