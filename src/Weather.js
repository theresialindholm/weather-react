import React, { useState } from "react";
//import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: "",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

        });
    }

    if (weatherData.ready) {
          return (
            <div className="Weather">
              <div className="wrapper">
                <br />
                
                <br />
                <form id="search-form">
                  <div className="search">
                    <span className="search-city">
                      <input
                        type="text"
                        placeholder="Enter city"
                        autoFocus="on"
                        id="search-text-input"
                        size="28"
                      />
                    </span>
                    <span id="search-btn" href="#">
                      <i className="fas fa-search"></i>
                    </span>
                    <span id="location-btn" href="#">
                      <i className="fas fa-location-arrow"></i>
                    </span>
                  </div>
                </form>
        
                <div className="row row-cols-auto justify-content-center">
                  <div className="col-6 weather-info">
                    <div className="city-date-degree">
                      <h5 className id="current-city">
                        {weatherData.city}
                      </h5>
                      <h6 className="date" id="current-date">
                        {weatherData.date}
                      </h6>
                      <p className id="weather-description">
                        {weatherData.description}
                      </p>
                      <h2 className="degree">
                        <span id="temp-now">{Math.round(weatherData.temperature)}</span>°
                        <span href="#" id="celsius" className="active">
                          C
                        </span>
                        <span id="divider">|</span>
                        <span href="#" id="fahrenheit">
                          F
                        </span>
                      </h2>
                    </div>
                  </div>
        
                  <div className="col-6 weather-info icon-details">
                    <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />
                    <ul className="weather-details">
                      <li>
                        Feels like:
                        <span id="percieved"></span>°
                      </li>
                      <li id="hum">Humidity:{weatherData.humidity}</li>
                      <li id="wind-speed">Wind:{weatherData.wind}</li>
                    </ul>
                  </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
              </div>
            </div>
          );
    } else {
        const apiKey = "79d26871fe6a29e52dcc85af1af380ed";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return "Loading..";
    }

}