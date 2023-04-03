import axios from "axios";
import React, { useState } from "react";

const GetCities = () => {

    const [cities, setCities] = useState()

    console.log(cities)

    const handleCities = (e) => {
        e.preventDefault()
        const cityName = e.target.cityName.value

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e137e1075490da4c29206619e9d45d0a`   
    
    axios.get(URL)
   .then((res) => setCities(res.data))
   .catch((err) => console.log(err)) 
}

  return (
    <form onSubmit={handleCities} className="flex justify-center gap-3 p-4 ">
      <input id="cityName"
        className="rounded-md bg-gray-500 opacity-25 border-2 shadow-lg shadow-cyan-500/50 text-white"
        type={cities?.description} placeholder="Country, City..."
      />
      <button className=" bg-green-600/30 border-2 rounded-md px-2 text-white shadow-lg shadow-cyan-500/50 hover:bg-sky-500/50 duration-300">
        Search
      </button>
    </form>
  );
};

export default GetCities;
