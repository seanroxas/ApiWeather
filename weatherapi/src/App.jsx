import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Components/Weather";

function App() {
  const [data, setData] = useState({
    coord: {
      lon: 120.9822,
      lat: 14.6042,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    base: "stations",
    main: {
      temp: 25.44,
      feels_like: 26,
      temp_min: 25,
      temp_max: 26.17,
      pressure: 1016,
      humidity: 75,
    },
    visibility: 10000,
    wind: {
      speed: 2.57,
      deg: 90,
    },
    clouds: {
      all: 20,
    },
    dt: 1708988356,
    sys: {
      type: 2,
      id: 2008256,
      country: "PH",
      sunrise: 1708985687,
      sunset: 1709028210,
    },
    timezone: 28800,
    id: 1701668,
    name: "Manila",
    cod: 200,
  });
  const [location, setLocation] = useState("");

  const API_KEY = "ee4526f7eb49c95b28a46462c32a610b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}
    &units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-screen relative bg-slate-900">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-5/6 md:4/6 sm:w-2/6 text-lg rounded-3xl 
            border-gray-200 text-gray-600 placeholder:text-gray-400 
            focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
