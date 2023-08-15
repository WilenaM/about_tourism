
import "./destinList.scss";
import DestinCard from "../destinCard/destinCard";

function DestinationsList({ id, title, cards }) {
    return (
        <section id={id} className="destinations_list">
            <div className="container">
                <h2 className="with_lines monserrat_text">{title}</h2>
                <div className="destinations_list_content">
                    {cards.map((item) => (
                        <DestinCard key={item.title} {...item} />
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default DestinationsList;
