import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ForeCast from "./ForeCast";
import {useState} from "react";
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
    return(
        <div>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherinfo.currResult}/>
           <ForeCast arr={weatherinfo.arr}/>
           <br />
           <br />
           <br />
           
        </div>
    )
}
// This is WeatherApp.jsx

