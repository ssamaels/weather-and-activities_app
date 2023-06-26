import "./Form.css";
import { useState } from "react";
import { uid } from "uid";
import { ReactComponent as SunFilled } from "./Sun-filled.svg";
import { ReactComponent as Sun } from "./Sun.svg";

const Form = ({ onAddActivity }) => {
  // setting the state variables
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // the checkbox is set to display:none and replaced by two images which then use this function to toggle the checked state of the checkbox and the isForGoodWeather variable
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setIsForGoodWeather(!isForGoodWeather);
  };

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
      <h3>Add Activity</h3>
      <div>
        <label htmlFor="activity-name">Activity Name: </label>
        <input
          type="text"
          id="activity-name"
          className="activity-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="good-weather-activity">Good Weather Activity: </label>
        <input
          type="checkbox"
          id="good-weather-activity"
          className="checkbox"
          checked={isForGoodWeather}
          onChange={(e) => setIsForGoodWeather(e.target.checked)}
        />
        {/* if isForGoodWeather is true the SunFilled .svg is used and the handleToggle function called on click, else the same happens with the regular Sun .svg */}
        {isForGoodWeather ? (
          <SunFilled onClick={handleToggle} />
        ) : (
          <Sun onClick={handleToggle} />
        )}
      </div>
      <button className="addButton" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
