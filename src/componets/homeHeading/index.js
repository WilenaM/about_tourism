import { Link } from "react-router-dom";
import "./hHeading.scss";

function HomeHeading({video, img, title, caption, button}) {
  return (
    <div className="home_heading">
      {video ? ( 
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>) : ''}
      {img ? (
        <div className="img-wrapper">
        <img src={img}/>
      </div>
      ): ''}
      <div className="heading_content">
        <h1 className="heading_overlay_title">{title}</h1>
        <div className="heading_overlay_caption">{caption}</div>
      {
        button ? (<div className="heading_overlay_btnwrap">
        <Link className="heading_overlay-btn" to={button.href}>{button.text}</Link>
      </div>) : ''
      }
      <div className="ukraine"> 
        <Link to="https://www.standwithukraine.how/" target="_blank"><img src="images/logo_ukr.png" alt="logo_ukraine"/><span>StandWithUkraine</span></Link>
      </div>
      </div>
    </div>
  );
}

export default HomeHeading;