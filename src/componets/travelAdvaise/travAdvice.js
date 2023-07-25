
import "./advice.scss";
import montagneBackground from "../../assets/images/montagne.jpg"


const advices = [
    {
        title:'Explore local traditions and customs:',
        text: 'Before traveling, familiarize yourself with the culture and traditions of the destination country. Respect the local customs to better understand the local people and create harmonious relationships.'
    },

    {
        title:'Book accommodation in advance:',
        text: 'Popular places and good hotels fill up quickly, especially during peak seasons. Book your accommodation in advance to avoid any issues with lodging.'
    },

    {
        title:'Create backups of documents:',
        text: 'Scan and save electronic copies of important documents such as passports, visas, insurance, and tickets. Also, keep physical copies in a separate place from the originals.'
    },

    {
        title:'Prioritize safety:',
        text: ' Keep your valuables and money in secure places, avoid displaying expensive jewelry or gadgets overtly.'
    },

    {
        title:'Be polite and smile:',
        text: 'A smile and friendliness can ease communication with locals and make your travel experience more pleasant.'
    }
]



function TravelAdvice() {
    return (
        <section className="travel_advice" style={{
            backgroundImage: `url(${montagneBackground})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover'
        }}>
            <h2>TRAVEL ADVICE</h2>
            <div className="container">
                <div className="advice_blog" >
               {
                   advices.map((advice,index) => (
                    <div key={index} className={`advice_card ${index%2 === 0 ? 'advice_card_left' : 'advice_card_right' }`}>
                        <div className="advice_card_number">{index+1}</div>
                        <h3 className="advice_card_title">{advice.title}</h3>
                        <p className="advice_card_text">{advice.text}</p>
                    </div>
                   ))
               }
                </div>
            </div>
        </section>
    )
}

export default TravelAdvice;