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
        // console.log(jsoncurrResponse);
        let jsonfutResponse = await futResponse.json();
        console.log(jsonfutResponse);
        

        // We are making an object of only those details that we want to show.  :: Current-Weather.
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
        // console.log(currResult);

        // Future Weather: 5-days weather with 3-hrs gap.
        // Array of objects.
        let arr=[];
        for(let i=0; i<40; i++)
        {
            let date = new Date(jsonfutResponse.list[i].dt_txt);
            const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
            const formattedDate = date.toLocaleDateString('en-GB', options);
            const options2 = { hour: '2-digit', minute: '2-digit' };
            const formattedTime = date.toLocaleTimeString([], options2);
           arr[i]={
            date: formattedDate, 
            time: formattedTime,
            temp: (jsonfutResponse.list[i].main.temp - 273.15).toFixed(2),
            windSpeed: jsonfutResponse.list[i].wind.speed, 
            tempMin: (jsonfutResponse.list[i].main.temp_min - 273.15).toFixed(2),
            tempMax: (jsonfutResponse.list[i].main.temp_max - 273.15).toFixed(2), 
            feelsLike: (jsonfutResponse.list[i].main.feels_like - 273.15).toFixed(2),
            humidity: jsonfutResponse.list[i].main.humidity,
            weather: jsonfutResponse.list[i].weather[0].description

           }
        }
        // console.log(arr);
        
        let newobj={currResult: currResult, arr:arr};
        console.log(newobj);
        return newobj;
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
            label="Enter City here " 
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

// This is SearchBox.jsx
