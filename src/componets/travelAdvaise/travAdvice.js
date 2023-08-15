
import "./advice.scss";
import montagneBackground from "../../assets/images/montagne.jpg"



function TravelAdvice({ advices }) {
    return (
        <section className="travel_advice" style={{
            backgroundImage: `url(${montagneBackground})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover'
        }}>
            <h2 className="with_frame monserrat_text">TRAVEL ADVICE</h2>
            <div className="container">
                <ol className="advice_blog" >
               {
                   advices.map((advice,index) => (
                    <li key={index} className={`advice_card ${index%2 === 0 ? 'advice_card_left' : 'advice_card_right' }`}>
                        <div className="advice_card_number"></div>

                        <h3 className="advice_card_title lugrasimo">{advice.title}</h3>
                        <p className="advice_card_text lugrasimo">{advice.text}</p>
                    </li>
                   ))
               }
                </ol>
            </div>
        </section>
    )
}

export default TravelAdvice;