import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Weather from "./components/Weather/Weather.js";
import Activities from "./components/Activities/Activities.js";
import FilterActivities from "./components/FilterActivities/FilterActivities.js";
import Form from "./components/Form/Form.js";
import "./App.css";

function App() {
  // setting up state variables for use in functions below
  const [activities, setActivities] = useLocalStorage("Activity: ", []);
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [weather, setWeather] = useState("");

  // fetch function to get weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        // setting the isGoodWeather and weather states
        setIsGoodWeather(data.isGoodWeather);
        setWeather(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    // setting the interval to refetch the weather data every 5 seconds
    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);
    return () => clearInterval(interval);
  }, []);

  // function to handle adding an activity to the existing activities
  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  // function to delete an activity by there ID with the help of a filtering the array of objects
  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  // filtering activities in good weather and bad weather ones by comparing to the API key isGoodWeather
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // returning the HTML with all props passed
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
