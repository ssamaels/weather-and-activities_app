import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      <h1>{weather.condition}</h1>
      <h2>{weather.temperature}°C</h2>
    </div>
  );
};

export default Weather;
