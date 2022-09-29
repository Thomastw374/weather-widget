import { useState } from "react";
import "./Weather.scss"


const Weather = ({weather}) => {
    const {isCelsius, setIsCelsius} = useState(true)
    
    const location = weather.location;
    const current = weather.current;

    return (
      <div className="weather-card">
        <div className="weather-card__topline">
          <h3 className="weather-card__topline-text">
            {location.region}, {weather ? location.country : ""}
          </h3>
          <div className="weather-card__condition">
            <img
              className="weather-card__item"
              src={weather ? current.condition.icon : ""}
              alt=""
            />
            <p className="weather-card__item">
              {!isCelsius ? current.temp_c + " C" : current.temp_f + " F"}
            </p>
            <p className="weather-card__item">
              {weather ? current.condition.text : ""}
            </p>
          </div>
        </div>
        <div className="weather-card__additionals">
          <p className="weather-card__additional">
            {`Humidity: ` + (weather ? current.humidity : "") + `%`}
          </p>
          <p className="weather-card__additional">
            {`Avg. Wind Speed: ` + (weather ? current.wind_mph : "") + ` mph`}
          </p>
          <p className="weather-card__additional">
            {`Feels Like: ` + (weather ? current.feelslike_c : "") + ` C`}
          </p>
        </div>
      </div>
    );
}


export default Weather;