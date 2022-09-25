import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [status, setStatus] = useState();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className="App">
      <Home getLocation={() => getLocation()} />
    </div>
  );
}

export default App;
