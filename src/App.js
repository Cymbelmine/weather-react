import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon"/>
       <footer>
         This project was created by <a href="https://stepbystep.hashnode.dev/" target="_blank">Mel Wieschalla</a> and is 
         <a href="https://github.com/Cymbelmine/weather-react" target="_blank"> open-sourced on GitHub</a>
       </footer>
    </div>
    </div>
  );
}

