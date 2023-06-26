import React, { useState } from "react";

const Form = ({ onAddActivity }) => {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      isForGoodWeather,
    };
    onAddActivity(newActivity);
    setName("");
    setIsForGoodWeather(false);
    document.getElementById("activity-name").focus();
  };
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
