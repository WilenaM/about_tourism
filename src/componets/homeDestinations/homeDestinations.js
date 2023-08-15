import "./homeDestinations.scss";
import italyImage from "../../assets/images/firenze.jpg";
import israelImage from "../../assets/images/jerusalem.jpg";
import belgiumImage from "../../assets/images/brugge.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DestinCard from "../destinCard/destinCard";

function HomeDestinations({items}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1184 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1184, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="home_destinations">
      <div className="container">
        <h2 className="with_frame">Destinations</h2>
        <p className="desc_destin lugrasimo">Pick a country and start exploring!</p>
        <Carousel responsive={responsive}
        infinite={true}
        showDots={true}
        renderDotsOutside
        swipeable={true}
        dotListClass={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        itemClass="home_destinations_li"
        >
          {items.map((item) => (
            <DestinCard key={item.title} {...item}/>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeDestinations;
