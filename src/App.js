import "./App.css";
import Header from "./componets/header";
import HomeHeading from "./componets/homeHeading";
import WhyChoose from "./componets/whyChoose/whyChoose";
import HomeDestinations from "./componets/homeDestinations/homeDestinations";
import TravelAdvice from "./componets/travelAdvaise/travAdvice";
import NewsTuorism from "./componets/news/news";
import Footer from "./componets/footer/footer";
import DefaultLayout from "./layouts/default";
import Destinations from "./pages/destinations";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="destinations" element={<Destinations/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
