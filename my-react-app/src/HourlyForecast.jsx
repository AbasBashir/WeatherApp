import React from 'react'


function HourlyForecast({hourlyForecastData, degreeStatus}) {

    if (!hourlyForecastData) {
        return null; 
    }
    const firstFiveHours = hourlyForecastData.firstHour.slice(0, 5); // Here we are using the slice() method on firstHour property and we essentially store the 5 first hours inside firstFiveHours

    return (
        <div className='w-full max-w-7xl mx-auto relative top-20 sm:top-52 pb-20'>

        </div>
    )
}

export default HourlyForecast
