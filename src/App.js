import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="container">
        <Weather defaultCity="Stockholm" />
        </div>
        <footer>
          This project was coded by Tea Lindholm and is {" "}
        <a href="https://github.com/theresialindholm/shecodes-weather-app">
          open-sourced on Github {" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
