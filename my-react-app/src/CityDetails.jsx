import React from 'react'
import getCurrentDay from './getCurrentDay';


function CityDetails({weatherData}) {

    if (!weatherData) {
        return null; 
    }

    const currentDay = getCurrentDay(weatherData.date); // function used for transforming the current format e.g. 2024-04-10 15:38 to Apr 10, 2024 03:38 PM
    
  return (
    <div>
        <div className='flex items-center justify-center relative top-14'>           
            <p className='text-white text-2xl font-extralight sm:text-3xl'>
                {currentDay}
            </p>
        </div>
        <div className='flex items-center justify-center relative top-20 sm:top-24 xl:top-28'>
            <p className='text-4xl text-center text-white font-normal sm:text-5xl'>
                {weatherData.name}
            </p>
        </div>
    </div>
  )
}

export default CityDetails
