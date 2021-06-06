import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
//import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState (props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,

        });
    }

    function search() {
    const apiKey = "79d26871fe6a29e52dcc85af1af380ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    }

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

    if (weatherData.ready) {
          return (
            <div className="Weather">
              <div className="wrapper">
                <br />
                
                <br />
                <form id="search-form" onSubmit={handleSubmit}>
                  <div className="search">
                    <span className="search-city">
                      <input
                        type="text"
                        placeholder="Enter city"
                        autoFocus="on"
                        id="search-text-input"
                        size="28"
                        onChange={handleCityChange}
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
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            </div>
          );
    } else {
search();
return "Loading..";
    }

}