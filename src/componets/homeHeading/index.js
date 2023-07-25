import "./hHeading.scss";
import bgVideo from "../../assets/video/bgVideo.mp4";

function HomeHeading() {
  return (
    <div className="home_heading">
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="heading_content">
        <h1 className="heading_overlay_title">EXPLORE. DREAM. DISCOVER.</h1>
        <div className="heading_overlay_caption">
          This is a world travel blog featuring beautiful destinations, new
          experiences, and hidden places around the world.
        </div>
        <div className="heading_overlay_btnwrap">
          <a className="heading_overlay-btn" href="/destinations/">
            START EXPLORING
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeHeading;