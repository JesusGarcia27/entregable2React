import React, { useState } from 'react'
import GetCities from './GetCities'

const Weather = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    console.log(weather)

    const changeCelOrFar = () => {
        setIsCelsius(!isCelsius)

    }
    
        
  return (
    <section className='text-xl '>
        <h2 className='text-center mb-6 text-4xl font-bold tracking-wider text-white'>{weather.name}, {weather.sys.country} </h2>

        <GetCities />

        <section className='grid gap-4 sm:grid-cols-two '>
            
            <article className='bg-slate-500/30 rounded-3xl grid grid-cols-2 justify-items-center items-center border-2 py-2 sm:px-2 shadow-lg shadow-cyan-500/50'>
                <h3 className='col-start-1 col-end-3'>{weather.weather[0].description} </h3>
                
                    <h2 className='text-5xl px-1 sm:text-6xl'>{isCelsius ? `${temp.celsius} °C` : `${temp.fahrenheit} °F`}</h2>

                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </div>

            </article>

            <article className='bg-slate-500/30 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch py-2 border-2 gap-4 sm:grid-cols-1 sm:px-2 sm:py-2 shadow-lg shadow-cyan-500/50' >

                <div className='flex text-base justify-center items-center m-1'>
                    <div className='px-2' >
                        <img src="/img/wind2.png" />
                    </div>
                    <h5 className='text-center'>{weather.wind.speed} m/s</h5>
                </div>

                <div className='flex text-base justify-center items-center m-1'>
                    <div className='px-2'>
                        <img src="/img/Humidity.png" alt="" />
                    </div>
                    <h5 className='text-center'>{weather.main.humidity} %</h5>
                </div>

                <div className='flex text-base justify-center items-center m-1'>
                    <div className='px-2'>
                        <img src="/img/pressure.png" alt="" />
                    </div>
                    <h5 className='text-center'>{weather.main.pressure} hPa</h5>
                </div>

            </article>

        </section>

        <button onClick={changeCelOrFar} className='bg-green-600/30 py-2 px-6 text-white font-bold rounded-full hover:bg-sky-500/50 hover:ring-sky-500 duration-300  text-3xl block mx-auto mt-6 border-2 shadow-lg shadow-cyan-500/50'>Change °C/°F</button>

    </section>
  )
}

export default Weather