import React from "react";
//import axios from "axios";
//import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Stockholm",
    date: "Saturday 1 May 17:44",
    description: "Clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 30,
    wind: 12,
    temperature: 72
  };

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
                <span id="temp-now">{weatherData.temperature}</span>°
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
            <img src={weatherData.imgUrl} alt="" id="icon" />
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
      <footer>
        <span href="https://github.com/theresialindholm/shecodes-weather-app">
          Open-source code {" "}
        </span>
        by Tea Lindholm
      </footer>
    </div>
  );
}