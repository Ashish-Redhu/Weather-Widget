import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import rainLogo from './assets/rainlogo.png';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL= "https://images.unsplash.com/photo-1527954513726-611b208be16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvZ2d5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="Infobox">      
        <div className="cardContainer">     
        <h2>Today's Weather -- </h2>     
        <Card sx={{ maxWidth: 1000 }} style={{ width: 1000, height: 650, marginBottom: 15}} >
       
        <CardMedia
            sx={{ height: 400, position: 'relative' }}
            image={info.humidity>60 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL }
            title="green iguana"
        >
        {/* Add logo/image and text */}
          <img src={rainLogo} alt="logo" style={{ position: 'absolute', top: 20, left: 20, width: 50, height: 50 }} />
          <Typography variant="h4" component="div" style={{ position: 'absolute', top: 80, left: 20, color: 'black' }}>
          {info.humidity}&#37;
          </Typography>
      </CardMedia>

      <CardContent className="cardContent">
        <Typography gutterBottom variant="h5" component="div" className="cont1">
          {info.city} 
          <span style={{marginLeft: "15px"}}>
            {info.humidity>60 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
          <span style={{marginLeft: "15px"}}>{info.temp}&deg;C</span>
          </span>
          <div style={{marginTop: 15}}>
          {info.weather}
          </div>
        </Typography>

        <Typography variant="body2" color="text.secondary" component={"span"} className="cont2">
          <div  style={{marginTop: "15px"}}>
            <p>Humidity = {info.humidity}&#37;</p>
            <p>Wind Speed = {info.windSpeed}m/s</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather is <b>{info.weather}</b> and temperature feels like {info.feelsLike} </p>
          </div>
            
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

// This is InfoBox.jsx