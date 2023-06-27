import "./Activities.css";

const Activities = ({ activities, onDeleteActivity, isGoodWeather }) => {
  // HTML code for the activities list
  return (
    <div className="activities-container">
      <h3>
        {/* Parsing the appropriate text according to isGoodWeather true/ false and the length of the activities list */}
        {isGoodWeather
          ? "It's sunny outside. Go and do something like "
          : "Yeah, better stay in and do something like "}
        {activities.length === 1
          ? `this activity:`
          : `these ${activities.length} activities:`}
      </h3>
      <ul>
        {/* Mapping over the activities array to display them individually */}
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}{" "}
            {/* Delete button calling the handleDeleteActivity function in App.js */}
            <button
              className="deleteButton"
              onClick={() => onDeleteActivity(activity.id)}
            >
              <strong>-</strong>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
