import "./whyChoose.scss";
import globeImg from "../../assets/images/globys.jpg";
import girlTourist from "../../assets/images/girl.jpg";
import { Link } from "react-router-dom";

function WhyChoose() {
  return (
    <section className="why_choose">
      <div className="container">
        <div className="wrap_choose">
          <h2 className="montserat_text with_frame" >About me</h2>
          <img src={girlTourist} alt="girl" />
          <p className="lugrasimo">
            Hey there! I'm Kristina, a globe-trotting travel blogger on a
            never-ending quest to uncover the wonders of this beautiful planet.
          </p>
          <p className="lugrasimo">
            My blog is a virtual scrapbook of unforgettable moments, offering
            fellow adventurers practical tips and inspiration to embark on their
            own remarkable journeys.
          </p>
          <p className="lugrasimo">
            Join me as I continue to chase sunsets, embrace new experiences, and
            share the magic of travel with the world!
          </p>

          <div className="why_choose_link">
            <Link to="/about" className="learn_more pacifico">
              lern more
            </Link>
          </div>
        </div>
        <div className="img_globys">
          <img src={globeImg} alt="globys" />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
