import DailyForecast from "../../components/DailyForecast/DailyForecast";
import "./WeekForecast.scss"

const WeekForecast = ({forecast}) => {

    const arrayOfDailys = forecast.forecast.forecastday;

    const dailyForecastArray = arrayOfDailys.map((dailyForecast) => {
        return(
            <DailyForecast dailyForecast={dailyForecast}/>
        )
    })

    return(
        <div className="forecast">
            {dailyForecastArray}
        </div>
    )
}

export default WeekForecast;