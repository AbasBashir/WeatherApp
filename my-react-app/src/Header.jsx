import React,{useState} from 'react';
import weatherLogo from './assets/cloud.png';
import searchLogo from './assets/search.png';
import Searchbar from './Searchbar';

function Header({updateWeatherData, hourlyForecast, dailyForecast}) {

    const [isSearchOpen, setIsSearchOpen] = useState(false); // stateful variable + setter function used to manage the opening and closing of searchbar

    // function to update the stateful variable
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div>
            <div className='container relative z-20 flex items-center justify-between px-4 sm:mx-auto sm:px-0'>
                <div className='py-4 flex items-center gap-3 cursor-pointer'>
                    <img src={weatherLogo} alt="brand logo" className='w-12 h-12'/>
                    <span className='text-2xl font-semibold'>Weather<span className='font-light text-white'>Zone</span></span>
                </div>
                <span><img src={searchLogo} alt="search-icon" className='w-5 h-5 mt-1 cursor-pointer transition ease-out duration-100 hover:scale-125' onClick={toggleSearch}/></span>
            </div>

            {/* isSearchOpen is placed here as a conditional to display the Searbar component only when isSearchOpen is set to true */}
            {isSearchOpen && <Searchbar updateWeatherData={updateWeatherData} hourlyForecast={hourlyForecast} dailyForecast={dailyForecast}/>} 
        </div>
    )

}

export default Header
