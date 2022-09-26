import "./App.css";
import { useEffect, useState } from "react";
import { apiKey } from "./data/enviromentVariables";
import Home from "./pages/Home";

function App() {
  const [weather, setWeather] = useState()

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
        });
    } else {
      alert("Geolocation not available");
    }
  }

  const getWeather = async (lat, long) => {

    let weatherData = [];
    const url =
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}`;
    const response = await fetch(url)
    weatherData = (await response.json());
    console.log(weatherData)
    setWeather(weatherData)
  }

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <div className="App">
      <Home weather={weather} />
    </div>
  );
}

export default App;
