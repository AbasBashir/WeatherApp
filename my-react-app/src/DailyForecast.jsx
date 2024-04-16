import React from 'react'

function DailyForecast({dailyForecastData, degreeStatus}) {

    if (!dailyForecastData) {
        return null; 
    }

    const firstFiveDays = dailyForecastData.forecastDays; // The first 5 days which is in forecastDays property is stored in firstFiveDays variable

    return (
        <div className='w-full max-w-7xl mx-auto pt-18 sm:pt-40 pb-20'>
            <div className='flex items-center justify-start mt-10 sm:mt-6'>
                <h2 className='pl-2 text-white text-2xl font-extralight w-full text-center sm:text-left'>Daily Forecast</h2>
            </div>
            <hr className='mt-1'/>
            
            <div className='flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row justify-around text-center text-white mt-10 sm:mt-6'>
                {firstFiveDays.map((info, index) => (
                <div key={index} className='flex flex-col items-center justify-center space-y-2 text-lg border-[1px] border-white rounded-md p-6 sm:border-none sm:p-0'>
                    <p className='flex text-white text-md font-extralight'>{new Date(info.date).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                    <img src={`https:${info.day.condition.icon}`} alt='Weather Icon' className='w-18 h-18 '/>
                    <p>{degreeStatus ? info.day.avgtemp_c + "°C" : info.day.avgtemp_f + "°F"}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default DailyForecast
