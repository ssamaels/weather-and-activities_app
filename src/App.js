import useLocalStorage from "use-local-storage";
import Weather from "./components/Weather/Weather.js";
import Activities from "./components/Activities/Activities.js";
import Form from "./components/Form/Form.js";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorage("Activity: ", []);

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };
  return (
    <>
      <Weather />
      <Activities />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
