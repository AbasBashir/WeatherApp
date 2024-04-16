import React from 'react'
import humidity from './assets/humidity.png';
import wind from './assets/wind.png';
import sunrise from './assets/sunrise.png';
import sunset from './assets/sunset.png';
import thermometer from './assets/thermometer.png';


function TempratureAndDetails({weatherData, sys, setDegreeStatus, degreeStatus}) {

   const updateDegreeStatus = () =>{
    setDegreeStatus(!degreeStatus);
   }; 
   
  return (
    <div>
    {weatherData && sys && ( 
        <>
            <div className='flex flex-col space-y-12 items-center justify-center relative top-14'>           
                <p className='text-gray-200 text-3xl font-extralight relative top-12 sm:top-24 xl:top-28'>
                    {weatherData.currentWeather}
                </p>
           
                <div className='flex flex-col items-center justify-around p-2 rounded-lg bg-transparent text-white border-[1px] border-white relative top-10 shadow-xl shadow-black w-8/12 sm:top-20 sm:flex-row md:top-28'>
                    <img src={`https:${weatherData.currentWeatherIcon}`} alt='Weather Icon' className='w-20 h-20 '/>
                    <span className=' text-5xl'>{degreeStatus ? weatherData.temp_c + "°C" : weatherData.temp_f + "°F"}</span>
                    <div className='flex flex-col self-start space-y-3 mt-5 sm:mt-0 sm:self-auto'>
                        <div className='flex font-light space-x-2 self-start justify-center xl:items-center'>
                            <img src={humidity} alt="" className='w-4 h-5'/>
                            <span className=' font-light text-md'>Humidity :</span>
                            <span className=' text-md font-bold'>{weatherData.humidity}%</span>
                        </div>
                        <div className='flex font-light space-x-2 self-start justify-center xl:items-center'>
                            <img src={wind} alt="" className='w-4 h-5'/>
                            <span className=' font-light text-md '>Wind :</span>
                            <span className=' text-md font-bold'>{weatherData.wind} km/h</span>
                        </div>
                        <div className='flex font-light space-x-1 self-start justify-center xl:items-center'>
                            <img src={thermometer} alt="" className='w-5 h-5'/>
                            <span className=' font-light text-md '>Feels :</span>
                            <span className=' text-md font-bold'>{degreeStatus ? weatherData.feels_c + "°C" : weatherData.feels_f + "°F"}</span>
                        </div>
                    </div>
                    <button onClick={updateDegreeStatus} className='absolute -right-5 -top-8 bg-white text-black w-16 h-16 p-2 border-[1px] border-black rounded-full shadow-lg shadow-black hover:bg-black hover:text-white hover:scale-125 transition-all duration-300'>
                        <div className='flex justify-center items-center  space-x-1.5 font-bold'>
                            <span>°C</span>
                            <span>|</span>
                            <span>°F</span>
                        </div>
                    </button>
                </div> 
                <div className='flex flex-col items-center justify-center text-white relative top-8 space-y-2 pb-10 sm:flex-row sm:space-y-0 sm:top-16 md:top-24'>
                    <div className='flex items-center justify-center sm:mr-20'>
                        <img src={sunrise} alt="" className='w-6 h-4 mr-3'/>
                        <h5 className='text-md font-bold'>Sunrise</h5>
                        <p className='text-md font-semibol mt-[0.8px] ml-2'>{sys[0]}</p>
                    </div>
                    <div className='flex items-center justify-center sm:flex-row sm:mr-20'>
                        <img src={sunset} alt="" className='w-6 h-4 mr-3'/>
                        <h5 className='text-md font-bold'>Sunset</h5>
                        <p className='text-md font-semibol mt-[0.8px] ml-2'>{sys[1]}</p>
                    </div>
                </div>
            </div>
        </>
    )}
    </div>
  )
}

export default TempratureAndDetails
