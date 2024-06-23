import React, {useEffect, useState} from 'react'
import './css/style.css';
const Temp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState();
    useEffect(()=>{
        const fetchApi = async () =>{
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&&appid={dfde7a48f4ef6018acda195877585eca}`;
            const url = `http://api.weatherapi.com/v1/current.json?key= 2a4fde19cf754502b2880509242306&q=${search}`;

            const response = await fetch(url);
            const resJson = await response.json();
         setCity(resJson.current);
        };
        fetchApi();
    },[search])
    return (
        <>
        <div className="box">
          <div className="inputData">
             <input type="search" 
             value={search}
             className="inputField"
             onChange={(event)=>{
                  setSearch(event.target.value)
             }} />
          </div>
          {!city ? (
            <p className='error'>Data not found</p>
          ) : (
            <div>
            <div className="info">
            <h2 className='location'>
            <i className="fa-solid fa-street-view"></i>
            {search}  
            </h2>
            <h1 className="temp">
               {city.temp_c}°C
            </h1>
            <h3 className='temp-max'>
            Feels Like: {city.feelslike_c}°C | Humidity: {city.humidity}
            </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
            </div>

          )

          }

</div>
        </>
    )
};

export default Temp;