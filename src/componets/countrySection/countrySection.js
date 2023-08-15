import "./countrySections.scss";
import ImageGrid from "../imageGrid/indexGrid";
import { useEffect } from "react";




function CountrySection({ id, title, mainImg, paragraphs, gridImages }) {

    return (
        <article id={id} className="article_section">
            <div className="container article_section_container">
                <h2 className="lora_text with_underline">{title}</h2>
                <div className="country_section_content">
                    <div className="country_section_img">
                        <img src={mainImg.src} alt={mainImg.alt} />
                    </div>
                    {paragraphs.map((p, index) => (
                        <p key={index} className="lora_text country_section_paragrahs" dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                </div>
                <div className="country_section_image_grid">
                    {gridImages ? (<ImageGrid images={gridImages} />) : ''}
                </div>
            </div>
        </article>
    )
}

export default CountrySection;