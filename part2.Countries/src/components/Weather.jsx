import { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ selectedCapital }) => {
  const [weatherData, setWeatherData] = useState(null);

  console.log(selectedCapital);
  useEffect(() => {
    const fetchData = async () => {
      if (!selectedCapital) return;
      const api_key = import.meta.env.VITE_OPENWEATHER_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCapital}&appid=${api_key}&units=metric`;

      try {
        const response = await axios.get(weatherUrl);
        setWeatherData(response.data);
        console.log("Weather data", weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [selectedCapital]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {selectedCapital}</h2>
          <p>Temperature: {weatherData.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
