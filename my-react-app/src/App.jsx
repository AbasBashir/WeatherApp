import React,{useState, useEffect} from 'react';
import Header from './Header';
import CityDetails from './CityDetails';
import TempratureAndDetails from './TempratureAndDetails';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';


function App() {

  const apiKey = 'cc3a69cee89d442bbef103435240904';
  const base_Url = 'https://api.weatherapi.com/v1';

  const [weatherData, setWeatherData] = useState(null); // this is the stateful setter variable that stores all data related to weather
  const [sys, setSys] = useState(null); // state to store sunrise/sunset data
  const [hourlyForecastData, setHourlyForecastData] = useState(null); // State to store hourly forecast data
  const [dailyForecastData, setDailyForecastData] = useState(null); // State to store daily forecast data
  const [degreeStatus, setDegreeStatus] = useState(true); // State to store either celsius or fahrenheit on a condition, intially degreeStatus will have a boolean value of true whihc represents °C

  useEffect(() => {
    // Fetch weather data based on user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      }, (error) => {
        console.error('Error getting geolocation:', error);
      });
    } else {
      console.error('Geolocation is not working.');
    }
  }, []); // An empty array dependency means the it will only run once when the component mounts

   // function used to fetch and handle hourly forecast
   const hourlyForecast = (city) => {
    fetch(`${base_Url}/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no`)
      .then(response => response.json())
      .then(json => {

         // below we are using optional chaining operator (represented by ?.) because it helps us safely access nested properties without causing error if an intermediate property is null or undefined. 
         // If any property along the nested block is null or undefined, then the value returned will be an empty string, hence this optional chaining operator helps prevent throwing an error
        const result = {
          location: json?.location?.name,
          firstHour: json?.forecast?.forecastday[0]?.hour|| "",
        };

        setHourlyForecastData(result);

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };


  
  const fetchWeatherData = (latitude, longitude) => {
    fetch(`${base_Url}/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        const result = { // below we are using optional chaining operator (represented by ?.) because it helps us safely access nested properties without causing error if an intermediate property is null or undefined. If any property along the nested block is null or undefined, then the value returned will be an empty string, hence this optional chaining operator helps prevent throwing an error
          name: json?.location?.name || "",
          country: json?.location?.country || "",
          lon: json?.location?.lon || "",
          lat: json?.location?.lat || "",
          date: json?.location?.localtime || "",
          currentWeather: json?.current?.condition?.text || "",
          currentWeatherIcon: json?.current?.condition?.icon || "",
          temp_c: json?.current?.temp_c || "",
          temp_f: json?.current?.temp_f || "",
          humidity: json?.current?.humidity || "",
          wind: json?.current?.wind_kph || "",
          feels_c: json?.current?.feelslike_c || "",
          feels_f: json?.current?.feelslike_f || "",
        };

        setWeatherData(result);
        updateWeatherData(result);
        hourlyForecast([result.name]);
        dailyForecast([result.name]);

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

   // Function to update weather data in App component
  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-700 to-red-700 min-h-screen pt-50">
        <Header updateWeatherData={updateWeatherData} hourlyForecast={hourlyForecast} dailyForecast={dailyForecast}></Header>
        <CityDetails weatherData = {weatherData}></CityDetails>
        <TempratureAndDetails weatherData = {weatherData} sys={sys} degreeStatus={degreeStatus} setDegreeStatus={setDegreeStatus}></TempratureAndDetails>
        <HourlyForecast hourlyForecastData={hourlyForecastData} degreeStatus={degreeStatus}></HourlyForecast>
        <DailyForecast dailyForecastData={dailyForecastData} degreeStatus={degreeStatus}></DailyForecast>
      </div>
    </>
  )
}

export default App
