import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props) {
    return ( 
    <div className="WeatherInfo">
    <div className="row row-cols-auto justify-content-center">
    <div className="col-6 weather-info">
      <div className="city-date-degree">
        <h5 className id="current-city">
          {props.data.city}
        </h5>
        <h6 className="date" id="current-date">
          <FormattedDate date={props.data.date} />
        </h6>
        <p className="weather-description">
          {props.data.description}
        </p>
        <h2 className="degree">
            <WeatherTemperature celsius={props.data.temperature} />
        </h2>
      </div>
    </div>

    <div className="col-6 weather-info icon-details">
      <div className="float-left">
      <WeatherIcon code={props.data.icon} size={48} />
      </div>
      <ul className="weather-details">
        <li>
          Feels like:
          <span id="percieved"></span>°
        </li>
        <li id="hum">Humidity:{props.data.humidity}</li>
        <li id="wind-speed">Wind:{props.data.wind}</li>
      </ul>
    </div>
  </div>
  <div className="weather-forecast" id="forecast">
</div>
</div>
    );
}