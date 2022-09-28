import { useState } from "react";
import "./Weather.scss"


const Weather = ({weather}) => {
    const {isCelsius, setIsCelsius} = useState(true)
    
    const location = weather.location;
    const current = weather.current;
// may be able to remove some this ternary logic now. weather is now initialized as an empty object, I think that was the issue.
    return (
      <div className="weather-card">
        <div className="weather-card__topline">
          <h3 className="weather-card__topline-text">
            {location.region}, {weather ? location.country : ""}
          </h3>
          <div className="weather-card__condition">
            <img src={weather ? current.condition.icon : ""} alt="" />
            <p>{!isCelsius ? current.temp_c + " C" : current.temp_f + " F"}</p>
            <p>{weather ? current.condition.text : ""}</p>
          </div>
        </div>
        <div>
          <p>{`Humidity: ` + (weather ? current.humidity : "") + `%`}</p>
          <p>
            {`Avg. Wind Speed: ` + (weather ? current.wind_mph : "") + ` mph`}
          </p>
          <p>
            {`Feels Like: ` + (weather ? current.feelslike_c : "") + ` C`}
          </p>
        </div>
      </div>
    );
}

// A container should contain at least one component


export default Weather;