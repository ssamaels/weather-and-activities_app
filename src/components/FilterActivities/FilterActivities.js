const FilterActivities = ({ isGoodWeather, setIsGoodWeather }) => {
  // HTML code for the button filtering either the good or bad weather activities
  return (
    // a click sets the isGoodWeather state to it's opposite - note that the rerender of the fetch in App.js will change the state of the variable to the API data
    <button onClick={() => setIsGoodWeather(!isGoodWeather)}>
      {isGoodWeather
        ? "Show Bad Weather Activities"
        : "Show Good Weather Activities"}
    </button>
  );
};

export default FilterActivities;
