
import { Link } from "react-router-dom";
import "./destCard.scss"; 


function DestinCard({title, description, link, img}) {
    return (
        <div key={title} className="home_destinations_item">
              <div className="home_destinations_item_heading">
                <img src={img} alt={title} />
                <h3 className="montserat_text">{title}</h3>
              </div>
              <p className="home_destinations_item_descripton lora_text">
                {description}
              </p>
              <div className="home_destinations_item_btn">
                <Link to={link} className="pacifico learn_more">
                  learn more
                </Link>
              </div>
            </div>
    )
}

export default DestinCard;