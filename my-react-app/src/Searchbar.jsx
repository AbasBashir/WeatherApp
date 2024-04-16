import React from 'react'

function Searchbar() {

    const [search, setSearch] = useState(""); // This is a stateful variable setter used for displaying text in the searchbar when a user types
    const [searchResult, setSearchResult] = useState([]); // This is used for updating and storing the latest weather data depending on what city the user selects but searchResult is also used for displaying search results 

    // important function which updates the search state depending on user input and also calls the fetchData() with the input value from the user
    function searchUpdate(event){
        setSearch(event.target.value);
        const value = event.target.value;
        fetchData(value);
      }

     // css style
     const inputStyle = {
        backgroundImage: `url(${searchLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px center',
        backgroundSize: '18px 18px',
        paddingLeft: '35px', 
    };

    // This function is called from searchUpdate() where the input from user is passed in.
    const fetchData = (city) =>{

        // Here we check if the search value is empty or contains only whitespace
        if (city.trim() === "") { 
            setSearchResult([]); // If its true, then we clear the search results
            return; 
        }
        
        // Here we use fetch() to fetch data based on the city parameter
        fetch(`https://api.weatherapi.com/v1/current.json?key=cc3a69cee89d442bbef103435240904&q=${city}&aqi=no`)
        .then((response) => response.json()) //.then() is a method that handles the response from the server after we make a request. Response is the response from the server we then parse the response as JSON.
        .then(json => { 
            // below we are using optional chaining operator (represented by ?.) because it helps us safely access nested properties without causing error if an intermediate property is null or undefined. 
            // If any property along the nested block is null or undefined, then the value returned will be an empty string, hence this optional chaining operator helps prevent throwing an error
            const result = { 
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
    
            setSearchResult([result]); // Here we update the searchResult state with the new data aggregate
    
            }).catch(error => { // The catch block handles any unsuccesful data request
            console.error('Error fetching data:', error);
        });
    }      

    // This function is used to handle many things mentioned below
    const handleCitySelect = (result) => {
        updateWeatherData(result); // here we update the weatherData state in the App component
        hourlyForecast(result.name); // here we update the hourlyForecastData state when user selects a city 
        dailyForecast(result.name); // here we update the dailyForecastData name when user selects a city
        setSearch(""); // Clear search input once the user selects a city
        setSearchResult([]); // Clear search results
      }

    return (
        <div className={`overflow-hidden flex-col container mx-auto rounded-md p-1`}>
            <div className='w-full py-0.5 rounded-sm bg-white border-2 border-white outline-none'>
            <input type="text" value={search} onChange={searchUpdate} style={inputStyle} placeholder='Search City' className='w-full pl-4 py-0.5 outline-none'/>
            <ul className="list-none">
                {searchResult.map((result, index) => <li key={index} className='mt-2 p-1.5 hover:bg-gray-200 cursor-pointer'><button className='pl-5 inline-block w-full text-left' onClick={() => handleCitySelect(result)}>{result.name ? `${result.name}, ${result.country}` : ''}</button></li>)}
            </ul>
            </div>
        </div>
    )
}

export default Searchbar
