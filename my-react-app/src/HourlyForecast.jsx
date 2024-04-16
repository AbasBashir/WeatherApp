import React from 'react'


function HourlyForecast({hourlyForecastData, degreeStatus}) {

    if (!hourlyForecastData) {
        return null; 
    }
    const firstFiveHours = hourlyForecastData.firstHour.slice(0, 5); // Here we are using the slice() method on firstHour property and we essentially store the 5 first hours inside firstFiveHours

    return (
        <div className='w-full max-w-7xl mx-auto relative top-20 sm:top-52 pb-20'>
            <div className='flex items-center justify-start mt-10 sm:mt-6'>
                <h2 className='pl-2 text-white text-2xl font-extralight w-full text-center sm:text-left'>Hourly Forecast</h2>
            </div>
            <hr className='mt-1'/>
            
            <div className='flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row justify-around text-center text-white mt-10 sm:mt-6'>
                {firstFiveHours.map((hour, index) => (
                <div key={index} className='flex flex-col items-center justify-center space-y-1 text-lg border-[1px] border-white rounded-md p-6 sm:border-none'>
                    <p className='text-white text-md  font-extralight'>{hour.time.slice(10)} AM</p>
                    <img src={`https:${hour.condition.icon}`} alt='Weather Icon' className='w-18 h-18 '/>
                    <p>{degreeStatus ? hour.temp_c + "°C" : hour.temp_f + "°F"}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyForecast
