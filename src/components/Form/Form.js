import { useState } from "react";
import { uid } from "uid";

const Form = ({ onAddActivity }) => {
  // setting the state variables
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  // function to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // creating the object which will be filled with the form data
    const newActivity = {
      id: uid(),
      name,
      isForGoodWeather,
    };
    onAddActivity(newActivity);
    // resetting the state variables
    setName("");
    setIsForGoodWeather(false);
    document.getElementById("activity-name").focus();
  };

  // HTML code for the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <div>
        <label htmlFor="activity-name">Activity Name:</label>
        <input
          type="text"
          id="activity-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="good-weather-activity">Good Weather Activity:</label>
        <input
          type="checkbox"
          id="good-weather-activity"
          checked={isForGoodWeather}
          onChange={(e) => setIsForGoodWeather(e.target.checked)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
