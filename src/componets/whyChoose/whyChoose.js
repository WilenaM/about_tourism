import "./whyChoose.scss";
import globeImg from "../../assets/images/globys.jpg";
import girlTourist from "../../assets/images/girl.jpg";
// import ImageGrid from "../imageGrid/indexGrid";
// import flagCanada from '../../assets/images/canada_f.jpg'
// import flagFrance from '../../assets/images/france_f.jpg'
// import flagGermany from '../../assets/images/germany_f.jpg'
// import flagIsrael from '../../assets/images/israel_f.jpg'
// import flagItaly from '../../assets/images/italy_f.jpg'
// import flagPace from '../../assets/images/pace_f.jpg'
// import flagSpain from '../../assets/images/spain_f.jpg'
// import flagUkraine1 from '../../assets/images/ukr_f.jpg'
// import flagUkraine2 from '../../assets/images/ukraine_f.jpg'
// import ukraineGirl from '../../assets/images/ukraine_girl.jpg'
// import flagTurkey from '../../assets/images/turkey.jpg'
// import smallUkraine from '../../assets/images/small_ukr.jpg'
// import flagUsa from '../../assets/images/usaa.jpg'

// const gridImages = [
//   {
//    src: flagUkraine1,
//    alt: 'big-img',
//    gridWidth: 'span 2',
//    gridHeight: 'span 2'
//   },
//   {
//    src: flagCanada,
//    alt: 'small-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//   {
//    src: flagIsrael,
//    alt: 'high-img',
//    gridWidth: '',
//    gridHeight: 'span 2'
//   },
//   {
//    src: flagFrance,
//    alt: 'small-img',
//    gridWidth: 'span 2',
//    gridHeight: 'span 2'
//   },
//   {
//    src: flagItaly,
//    alt: 'wide-img',
//    gridWidth: 'span 2',
//    gridHeight: ''
//   },
//   {
//    src: flagGermany,
//    alt: 'small-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//   {
//    src: flagPace,
//    alt: 'small-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//   {
//    src: flagTurkey,
//    alt: 'high-img',
//    gridWidth: '',
//    gridHeight: 'span 2'
//   },
//   {
//    src: smallUkraine,
//    alt: 'wide-img',
//    gridWidth: 'span 4',
//    gridHeight: 'span 2'
//   },
//   {
//    src: flagCanada,
//    alt: 'big-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//   {
//    src: ukraineGirl,
//    alt: 'small-img',
//    gridWidth: 'span 2',
//    gridHeight: 'span 2'
//   },
//   {
//    src: flagSpain,
//    alt: 'small-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//   {
//    src: flagUsa,
//    alt: 'small-img',
//    gridWidth: '',
//    gridHeight: ''
//   },
//  ]

function WhyChoose() {
  return (
    <section className="why_choose">
      <div className="container">
        <div className="wrap_choose">
          <h2 className="montserat_text" >About me</h2>
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
            <a href="/about" className="learn_more pacifico">
              lern more
            </a>
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
