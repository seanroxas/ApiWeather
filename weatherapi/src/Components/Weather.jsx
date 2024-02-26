import React from "react";
import PropTypes from "prop-types";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="flex justify-center mt-24 items-center h-auto">
      {weatherData && (
        <div className="w-full md:max-w-xl sm:max-w-lg bg-gray-800 shadow-lg rounded-xl p-6">
          <div className="text-center">
            <p className="text-lg text-white font-semibold">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <p className="text-sm text-white">
              {weatherData.weather[0].description}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col items-start">
              <h1 className="text-6xl text-white font-semibold">
                {weatherData.main.temp.toFixed()}°C
              </h1>
              <div className="mt-2">
                <img
                  className="inline-block w-36"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="flex justify-between gap-2 mt-2">
                <p className="text-white">Feels Like: </p>
                <p className="text-white font-semibold">
                  {weatherData.main.feels_like.toFixed()} °C
                </p>
              </div>
              <div className="flex text-white justify-between gap-2 mt-2">
                <p>Humidity: </p>
                <p className="font-semibold">{weatherData.main.humidity} %</p>
              </div>
              <div className="flex text-white justify-between gap-2 mt-2">
                <p>Wind Speed: </p>
                <p className="font-semibold">
                  {weatherData.wind.speed.toFixed()} KPH
                </p>
              </div>
              <div className="flex text-white justify-between gap-2 mt-2">
                <p>Pressure: </p>
                <p className="font-semibold">{weatherData.main.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Weather;
