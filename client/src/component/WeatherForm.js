import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = () => {
  const [cities, setCities] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/getWeather', {
        cities: cities.split(',').map((city) => city.trim()),
      });

      setWeatherData(response.data.weather);
      console.log(weatherData)
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className='weather-main'>
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter cities separated by commas (e.g., Toronto, Mumbai, London)"
                value={cities}
                onChange={(e) => setCities(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>

      {weatherData && (
        <div>
          <h2>Weather Results:</h2>
          <ul>
            {Object.entries(weatherData).map(([city, temperature]) => (
              <li className='main-c' key={city}>
                {city}: {temperature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
