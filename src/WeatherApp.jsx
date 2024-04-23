import React, { useState, useEffect } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ForeCast from "./ForeCast";
// import {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './WeatherApp.css';

export default function WeatherApp(){
    const [weatherinfo, setWeatherInfo]=useState({
        currResult: { },
        arr: Array(40).fill({}) 
    });

// We will pass this "updateInfo" method to SearchBox.jsx and then we recive new object through API we will pass that info in this function calling and then inner function which is "setState" function so re-redering of WeatherApp. Re-rendering of "SearchBox" because of "city" state-variable.
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    const [showForeCast, setShowForeCast] = useState(false);
    let toggleShowForeCast = ()=>{
        setShowForeCast(!showForeCast);
    }

    // State for the clock time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []); // Run only once on component mount

    return(
        <div>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherinfo.currResult}/>

{/* Button to show/hide Weather ForeCast */}
           <Button variant="contained" onClick={toggleShowForeCast} className="toggle-forecast-btn">
               {showForeCast ? 'Hide ForeCast': 'Show ForeCast'}
           </Button>

           <div className={`forecast-container ${showForeCast ? 'show' : ''}`}>
                <ForeCast arr={weatherinfo.arr} className="forecast"/>
           </div>

{/* Clock component */}
<div className="clock-container">
                <svg className="clock" viewBox="0 0 200 200">
                    {/* Clock face */}
                    <circle cx="100" cy="100" r="95" stroke="black" strokeWidth="2" fill="white" />
                    {/* Hour markers */}
                    {Array.from({ length: 12 }, (_, index) => {
                        const angle = (index-3) * (Math.PI / 6);
                        const x = 100 + 80 * Math.cos(angle);
                        const y = 100 + 80 * Math.sin(angle);
                        return (
                            <text key={index} x={x} y={y} textAnchor="middle" alignmentBaseline="middle" fill="black" fontSize="12">
                                {index === 0 ? 12 : index}
                            </text>
                        );
                    })}
                    {/* Hour hand */}
                    <line x1="100" y1="100" x2={100 + 40 * Math.cos((currentTime.getHours() % 12 + currentTime.getMinutes() / 60) * (Math.PI / 6) - Math.PI / 2)} y2={100 + 40 * Math.sin((currentTime.getHours() % 12 + currentTime.getMinutes() / 60) * (Math.PI / 6) - Math.PI / 2)} stroke="black" strokeWidth="4" />
                    {/* Minute hand */}
                    <line x1="100" y1="100" x2={100 + 50 * Math.cos((currentTime.getMinutes() + currentTime.getSeconds() / 60) * (Math.PI / 30) - Math.PI / 2)} y2={100 + 50 * Math.sin((currentTime.getMinutes() + currentTime.getSeconds() / 60) * (Math.PI / 30) - Math.PI / 2)} stroke="black" strokeWidth="3" />
                    {/* Second hand */}
                    <line x1="100" y1="100" x2={100 + 50 * Math.cos(currentTime.getSeconds() * (Math.PI / 30) - Math.PI / 2)} y2={100 + 50 * Math.sin(currentTime.getSeconds() * (Math.PI / 30) - Math.PI / 2)} stroke="red" strokeWidth="1" />
                    {/* Center dot */}
                    <circle cx="100" cy="100" r="3" fill="black" />
                </svg>
            </div>

           <br />
           <br />
           <br />
           
        </div>
    )
}
// This is WeatherApp.jsx

