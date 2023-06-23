export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      isForGoodWeather: formData.get("checkbox") === "on",
    };
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add a new activity:</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="activity-name" />
        <label htmlFor="checkbox">Good-weather activity?</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}
