import React from 'react'

function DailyForecast({dailyForecastData, degreeStatus}) {

    if (!dailyForecastData) {
        return null; 
    }

    const firstFiveDays = dailyForecastData.forecastDays; // The first 5 days which is in forecastDays property is stored in firstFiveDays variable

    return (
        <div className='w-full max-w-7xl mx-auto pt-18 sm:pt-40 pb-20'>

        </div>
    )
}

export default DailyForecast
