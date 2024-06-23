import React from 'react'
import './css/style.css';

const Temp = () => {
    return (
        <>
        <div className="box">
          <div className="inputData">
             <input type="search" 
             className="inputField"
             onChange={(event)=>{

             }} />
          </div>
        <div className="info">
            <h2 className='location'>
            <i class="fa-solid fa-street-view"></i>
            Barishal  
            </h2>
            <h1 className="temp">

            </h1>
            <h3 className='temp-max'>
            min: 13° | max : 13°
            </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
</div>
        </>
    )
};

export default Temp;