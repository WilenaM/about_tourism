import { useEffect, useState } from "react";
import { WEATHER_KEY } from "../../env";
import "./contrySum.scss"

function CountrySum({ countryName, descriptionCountry, countryImg, lon, lat }) {

    const [weather, setWeather] = useState('');

    useEffect(() => {
        console.log(lon, lat);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric&mode=html`)
            .then((resp) => resp.text())
            .then((html) => html.includes('cod') ? '' : setWeather(html))
    }, [lon, lat])

    return (
        <section className="countrys_summmary">
            <div className="container for_grid">
                <div className="countrys_name_descriptions">
                    <div className="country_title">
                        <h2 className="with_underline monserrat_text">{countryName}</h2>
                        <img src={countryImg} alt={countryName} />
                    </div>
                    <p className="lora_text">{descriptionCountry}</p>
                    <div className="weather_wrapp">
                        {!weather.cod ? (<div className="weather_widget" dangerouslySetInnerHTML={{ __html: weather }}></div>) : ''}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CountrySum;