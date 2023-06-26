import "./Activities.css";

const Activities = ({ activities, onDeleteActivity }) => {
  // HTML code for the activities list
  return (
    <div className="activities-container">
      <h2>{activities.length} Activities</h2>
      <ul>
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
