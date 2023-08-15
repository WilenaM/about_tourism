import { Link } from "react-router-dom";
import "./about.scss";

function AboutMySito({biography, myself}) {
    return (
<section>
    <div className="container biography_self">
        <div className="biography lugrasimo">
            <h3>{biography.title}</h3>
            <p className="biography_text">{biography.text}</p>
            <div className="foto_self">
            <img src={biography.img} alt="dvaself"/>
            </div>
        </div>
        <div className="myself">
            <h2 className="with_underline montserat_text" >{myself.title}</h2>
            {myself.text.map((p, index) => (
                <p key={index} className="myself_text lora_text" dangerouslySetInnerHTML={{__html:p}}></p>
            ))}
            <div className="contact_us pacifico">
                
                <Link to="/contacts">Contact Us</Link>
                
            </div>
        </div>
    </div>
</section>
    )
}


export default AboutMySito;