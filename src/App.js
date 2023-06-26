import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Weather from "./components/Weather/Weather.js";
import Activities from "./components/Activities/Activities.js";
import Form from "./components/Form/Form.js";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorage("Activity: ", []);
  const [isGoodWeather, setIsGoodWeather] = useState(true);

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
      <Weather />
      <Activities
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
