import React,{useState, useEffect} from 'react';
import Header from './Header';

function App() {

  const apiKey = 'cc3a69cee89d442bbef103435240904';
  const base_Url = 'https://api.weatherapi.com/v1';

  const [weatherData, setWeatherData] = useState(null); // this is the stateful setter variable that stores all data related to weather
  const [sys, setSys] = useState(null); // state to store sunrise/sunset data
  const [hourlyForecastData, setHourlyForecastData] = useState(null); // State to store hourly forecast data
  const [dailyForecastData, setDailyForecastData] = useState(null); // State to store daily forecast data
  const [degreeStatus, setDegreeStatus] = useState(true); // State to store either celsius or fahrenheit on a condition, intially degreeStatus will have a boolean value of true whihc represents °C


   // Function to update weather data in App component
  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-700 to-red-700 min-h-screen pt-50">
        <Header updateWeatherData={updateWeatherData} hourlyForecast={hourlyForecast} dailyForecast={dailyForecast}></Header>
      </div>
    </>
  )
}

export default App
