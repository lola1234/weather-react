import React from "react";
import "./styles.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Open-source code by{" "}
          <a
            href="https://github.com/lola1234/weather-react"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Linora Imeri{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
