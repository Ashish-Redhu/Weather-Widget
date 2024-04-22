import React from 'react';
import './ForeCast.css';

const ForeCast= ({ arr }) => {
    return (
        <div className="forecast">
            <div className="header">
                <h2>Next 5-days</h2>
                <hr />
            </div>
            <div className="custom-card-container">

                {arr.map((item, index) => (
                    <div className="custom-card" key={index}>

                        <div className="card-content">
                            <div>Date: {item.date}</div>
                            <div>Time: {item.time}</div>
                            <hr />
                            <div>Temperature: {item.temp}&deg;C</div>
                            <div>Wind Speed: {item.windSpeed}m/s</div>
                            <div>Min Temperature: {item.tempMin}&deg;C</div>
                            <div>Max Temperature: {item.tempMax}&deg;C</div>
                            <div>Feels Like: {item.feelsLike}&deg;C</div>
                            <div>Humidity: {item.humidity}%</div>
                            <div>Weather: {item.weather}</div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ForeCast;

