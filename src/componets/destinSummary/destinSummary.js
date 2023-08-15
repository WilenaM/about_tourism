import "./summary.scss";

function DestinSummary() {
    return (
<section className="destin_summary">
    <div className="background_kvadrat"></div>
    <div className="container  destin_summary_grid">
        <div className="title_destin">
            <h2>My destinations</h2>
            <div className="imd_girl_wrapp">
                <img src="images/black_girl.jpeg" alt="girl" />
            </div>
        </div>
        <div className="windows_destin">
            <h3>Destinations are windows into different ways of life</h3>
            <p>Travel destinations are the vibrant threads that weave the tapestry of our global exploration. They encompass the diverse landscapes, cultures, histories, and experiences that beckon adventurers from all corners of the world. From bustling cities to serene natural wonders, each destination tells its own story and offers a unique tapestry of memories.</p>
        </div>
        <div className="curiosity_destin">
            <div className="foto_windows">
                <img src="images/windows.jpg" alt="windows" />
            </div>
            <div className="curiosity_text_content">
            <h3>Where does your curiosity take you?</h3>
        
            </div>
        </div>
    </div>
</section>
    )
}

export default DestinSummary;