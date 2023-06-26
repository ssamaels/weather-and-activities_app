const Weather = ({ weather }) => {
  // HTML code for displaying the weather information from the weather object defined every 5 seconds by the fetch function in App.js
  return (
    <div>
      <h1>{weather.condition}</h1>
      <h2>{weather.temperature}°C</h2>
    </div>
  );
};

export default Weather;
