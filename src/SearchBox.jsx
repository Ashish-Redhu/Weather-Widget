import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let CURRW_API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="cc012c2309fa4b648e96de2738efac69";
    let FUTW_API_URL="https://api.openweathermap.org/data/2.5/forecast";

    let getWeatherInfo = async ()=>{
        try{
        let currResponse = await fetch(`${CURRW_API_URL}?q=${city}&appid=${API_KEY}&unit=matric`);
        let futResponse = await fetch(`${FUTW_API_URL}?q=${city}&appid=${API_KEY}`);
    
        // The things we recieved is in some other format, we have to convert them to json to understand.
        let jsoncurrResponse = await currResponse.json();
        console.log(jsoncurrResponse);
        let jsonfutResponse = await futResponse.json();
        console.log(jsonfutResponse);
        

        // We are making an object of only those details that we want to show. 
        let currResult = {
            city: city,
            temp: (jsoncurrResponse.main.temp - 273.15).toFixed(2),
            windSpeed: jsoncurrResponse.wind.speed,
            tempMin: (jsoncurrResponse.main.temp_min - 273.15).toFixed(2),
            tempMax: (jsoncurrResponse.main.temp_max - 273.15).toFixed(2), 
            feelsLike: (jsoncurrResponse.main.feels_like - 273.15).toFixed(2),
            humidity: jsoncurrResponse.main.humidity,
            weather: jsoncurrResponse.weather[0].description
// Remember the temperature returned is not in celcius, it is in kelvin. ".toFixed(2)" means we want only 2-digits after decimal.
        }
        console.log(currResult);
        return currResult;
      } 
      catch(err)
      {throw err;}
    };
    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            await updateInfo(newInfo);
        }
        catch(err)
        {
            setError(true);
        }
        
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city"
            label="Search For your city here" 
            variant="filled" 
            required 
            value={city}
            onChange={handleChange}/>
            <br />
            <br />
            <Button variant="contained" type="submit">Search</Button>
            </form>

            {error && <p style={{color: "red"}}>Sorry, No such place exist in our API.</p> }
        </div>
    )
}

