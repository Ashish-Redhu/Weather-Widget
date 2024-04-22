import React from 'react';
import './ForeCast.css';
import rainLogo from './assets/rainlogo.png';
import hotLogo from './assets/hotlogo.png';
import coldLogo from './assets/coldlogo.png';

const ForeCast= ({ arr }) => {   
    return (
        <div className="forecast">
            <div className="header">
                <h2>Next 5-days</h2>
                <hr />
            </div>
            <div className="custom-card-container">

                {arr.map((item, index) => (
                    <div className={`custom-card ${item.humidity > 65 ? 'rain' : item.temp > 15 ? 'hot' : 'cold'}`} key={index}>
                        <div className="card-content">

                            <div className="dandT">
                                <div>{item.date}</div>
                                <div>{item.time}</div>
                            </div>

                            <div className="weatherlogo">
                                {item.humidity > 65 ? <img src={rainLogo} alt="raining" height={50} width={50} /> : item.temp > 15 ? <img src={hotLogo} alt="hot" height={50} width={50}  />  : <img src={coldLogo} alt="coldlogo"  height={50} width={50} /> }
                            </div>

                            <div className="templogo">
                                {item.temp}&deg;C
                            </div>
                            <div className="rainp">
                                {item.humidity}%
                            </div>
                            <div className="content">
                                <div>Wind-Speed: {item.windSpeed}m/s</div>
                                <div>Weather: {item.weather}</div>
                                <div>Min-Temp: {item.tempMin}&deg;C</div>
                                <div>Max-Temp: {item.tempMax}&deg;C</div>
                                {/* <div>Feels Like: {item.feelsLike}&deg;C</div> */}
                                
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ForeCast;

