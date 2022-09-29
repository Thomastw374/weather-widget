import "./App.css";
import { useEffect, useState } from "react";
import "./styles/main.scss";
import mockNewsData from "./data/mockNews";
import mockForecast from "./data/mockForecast";
import mockWeatherData from "./data/mockWeather";
import Home from "./pages/Home";

function App() {
  const [weather, setWeather] = useState(mockWeatherData);
  const [newsData, setNewsData] = useState(mockNewsData)
  const [forecast, setForecast] = useState(mockForecast)

  const getPositionPromise = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    });
  }

  // Do I even need the promise here now?
  
  const getPosition = () => {
    if (navigator.geolocation) {
      getPositionPromise()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          getWeather(28.67, 77.22);
          alert("You have disabled location service");
          // this alert happens when not connected to internet also
        });
    } else {
      alert("Geolocation not available");
    }
  }

  const getWeather = async (lat, long) => {

    let weatherData = {};

    const currentUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${long}`;
    const currentResponse = await fetch(currentUrl)
    weatherData = (await currentResponse.json());
    setWeather(weatherData)

    let forecastData = {}
    console.log(process.env.REACT_APP_WEATHER_API_KEY)

    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${long}&days=8`;

    const forecastResponse = await fetch(forecastUrl)
    forecastData = await forecastResponse.json()
    setForecast(forecastData)
  }

  const getNews = async() => {
    let newsData = {};
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_NEWS_API_KEY}&language=en`;
    const response = await fetch(url)
    newsData = await response.json()
    setNewsData(newsData)
  }

  useEffect(() => {
    getPosition();
    getNews();
  }, []);

  return (
    <div className="App">
      <Home weather={weather} newsData = {newsData} forecast = {forecast}/>
    </div>
  );
}

export default App;
