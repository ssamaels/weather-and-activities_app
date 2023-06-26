import React from "react";

const FilterActivities = ({ isGoodWeather, setIsGoodWeather }) => {
  return (
    <button onClick={() => setIsGoodWeather(!isGoodWeather)}>
      {isGoodWeather
        ? "Show Bad Weather Activities"
        : "Show Good Weather Activities"}
    </button>
  );
};

export default FilterActivities;
