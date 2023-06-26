import React from "react";

const Activities = ({ activities, onDeleteActivity }) => {
  return (
    <div>
      <h2>{activities.length} Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}{" "}
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
