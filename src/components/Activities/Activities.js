const Activities = ({ activities, onDeleteActivity }) => {
  // HTML code for the activities list
  return (
    <div>
      <h2>{activities.length} Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}{" "}
            {/* Delete button calling the handleDeleteActivity function in App.js */}
            <button onClick={() => onDeleteActivity(activity.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
