import "./homeDestinations.scss";
import italyImage from "../../assets/images/firenze.jpg";
import israelImage from "../../assets/images/jerusalem.jpg";
import belgiumImage from "../../assets/images/brugge.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const destinationItems = [
  {
    img: '/images/firenze.jpg',
    title: "Italy",
    description:
      "The href attribute is required for an anchor to be keyboard accessible...",
    link: "/destinations/italy",
  },

  {
    img: 'images/jerusalem.jpg',
    title: "Israel",
    description:
      "The href attribute is required for an anchor to be keyboard accessible...",
    link: "/destinations/israel",
  },

  {
    img: '/images/brugge.jpg',
    title: "Belgium",
    description:
      "The href attribute is required for an anchor to be keyboard accessible...",
    link: "/destinations/belgium",
  },

  {
    img: '/images/berlin.jpg',
    title: "Germany",
    description:
      "The href attribute is required for an anchor to be keyboard accessible...",
    link: "/destinations/germany",
  },
];

function HomeDestinations() {
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
        <h2 className="">Destinations</h2>
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
          {destinationItems.map((item) => (
            <div key={item.title} className="home_destinations_item">
              <div className="home_destinations_item_heading">
                <img src={item.img} alt={item.title} />
                <h3 className="montserat_text">{item.title}</h3>
              </div>
              <p className="home_destinations_item_descripton lora_text">
                {item.description}
              </p>
              <div className="home_destinations_item_btn">
                <a href={item.link} className="pacifico learn_more">
                  learn more
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeDestinations;
