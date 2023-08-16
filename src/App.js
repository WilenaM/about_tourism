import DefaultLayout from "./layouts/default";
import Destinations from "./pages/destinations";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts";
import Country from "./pages/country";
import AboutSito from "./pages/about";
import Error404 from "./componets/error404/error404";
import Gallerys from "./pages/gallerys";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="destinations" element={<Destinations/>}/>
          <Route path="destinations/:countryName" element={<Country />}/>
          <Route path="gallery" element={<Gallerys/>}/>
          <Route path="about" element={<AboutSito/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
