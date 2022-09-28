import "./App.css";
import { useEffect, useState } from "react";
import { apiKey } from "./data/environmentVariables";
import "./styles/main.scss";
import mockNewsData from "./data/mockNews";
import mockForecast from "./data/mockForecast";
import Home from "./pages/Home";

function App() {
  const [weather, setWeather] = useState({
    location: {
      name: "Newall Green",
      region: "Greater Manchester",
      country: "United Kingdom",
      lat: 53.38,
      lon: -2.28,
      tz_id: "Europe/London",
      localtime_epoch: 1664205422,
      localtime: "2022-09-26 16:17",
    },
    current: {
      last_updated_epoch: 1664205300,
      last_updated: "2022-09-26 16:15",
      temp_c: 14,
      temp_f: 57.2,
      is_day: 1,
      condition: {
        text: "Moderate or heavy rain shower",
        icon: "//cdn.weatherapi.com/weather/64x64/day/356.png",
        code: 1243,
      },
      wind_mph: 16.1,
      wind_kph: 25.9,
      wind_degree: 300,
      wind_dir: "WNW",
      pressure_mb: 1003,
      pressure_in: 29.62,
      precip_mm: 0.2,
      precip_in: 0.01,
      humidity: 59,
      cloud: 50,
      feelslike_c: 12.3,
      feelslike_f: 54.1,
      vis_km: 10,
      vis_miles: 6,
      uv: 3,
      gust_mph: 16.1,
      gust_kph: 25.9,
    },
  });

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

    const currentUrl =
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}`;
    const currentResponse = await fetch(currentUrl)
    weatherData = (await currentResponse.json());
    setWeather(weatherData)

    let forecastData = {}

    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=8`;

    const forecastResponse = await fetch(forecastUrl)
    forecastData = await forecastResponse.json()
    setForecast(forecastData)
  }

  const getNews = async() => {
    let newsData = {};
    const url =
      "https://api.thenewsapi.com/v1/news/top?api_token=FH3JXbwC6JJHnC8aFJFCFMuhKOdmor2vnWaSgVg1&language=en";
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
