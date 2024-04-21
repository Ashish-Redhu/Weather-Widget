import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./ForeCast.css";


export default function ForeCast({arr}){
    const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="forecast">
     {arr.map((item, index) => (
                <Card key={index} className={`forecast-card ${item.humidity > 70 ? 'rain' : item.temp > 15 ? 'hot' : 'cold'}`}>


                    {/* Card content with text */}
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Date: {item.date} {/* Convert timestamp to date */}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Time: {item.time} {/* Convert timestamp to time */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Temperature: {item.temp}&deg;C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Wind Speed: {item.windSpeed}m/s
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Min Temperature: {item.tempMin}&deg;C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Max Temperature: {item.tempMax}&deg;C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Feels Like: {item.feelsLike}&deg;C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Humidity: {item.humidity}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Weather: {item.weather}
                        </Typography>
                    </CardContent>

                </Card>
            ))}
           
        </div>
    )
}
