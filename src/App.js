import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Weather from "./components/Weather/Weather.js";
import Activities from "./components/Activities/Activities.js";
import FilterActivities from "./components/FilterActivities/FilterActivities.js";
import Form from "./components/Form/Form.js";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorage("Activity: ", []);
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        setIsGoodWeather(data.isGoodWeather);
        setWeather(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <Weather weather={weather} />
      <FilterActivities
        isGoodWeather={isGoodWeather}
        setIsGoodWeather={setIsGoodWeather}
      />
      <Activities
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
