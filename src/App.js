import useLocalStorage from "use-local-storage";
import Weather from "./components/Weather/Weather.js";
import Activities from "./components/Activities/Activities.js";
import Form from "./components/Form/Form.js";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorage("activity: ", "");
  return (
    <>
      <Weather />
      <Activities />
      <Form />
    </>
  );
}

export default App;
