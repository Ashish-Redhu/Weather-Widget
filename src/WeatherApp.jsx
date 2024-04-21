import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherinfo, setWeatherInfo]=useState({
        city: "Wonderland", 
        temp: 24.05, 
        tempMin: 20.53, 
        tempMax: 26.42,
        feelsLike: 22.65,
        humidity: 47, 
        weather: "haze", 
    });

// We will pass this "updateInfo" method to SearchBox.jsx and then we recive new object through API we will pass that info in this function calling and then inner function which is "setState" function so re-redering of WeatherApp. Re-rendering of "SearchBox" because of "city" state-variable.
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherinfo}/>
        </div>
    )
}