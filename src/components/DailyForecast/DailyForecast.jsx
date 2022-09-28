import { useState } from "react";

const DailyForecast = ({dailyForecast}) => {
    const[isCelsius, setIsCelsius] = useState(false)

    return (
      <div className="weather-card">
        <div className="weather-card__topline">
          <h3>{dailyForecast.date.substring(5, 10)}</h3>
          <div className="weather-card__condition">
            <img
              src={dailyForecast ? dailyForecast.day.condition.icon : null}
              alt=""
            />
            <p>
              {!isCelsius
                ? dailyForecast.day.avgtemp_c + " C"
                : dailyForecast.day.avgtemp_f + " F"}
            </p>
            <p>{dailyForecast ? dailyForecast.day.condition.text : null}</p>
          </div>
        </div>
      </div>
    );
}

export default DailyForecast;