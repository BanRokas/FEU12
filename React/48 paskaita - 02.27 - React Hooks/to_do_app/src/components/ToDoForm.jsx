const ToDoForm = ({ addNewTask }) => {

  const formSubmit = e => {
    e.preventDefault();
    addNewTask();
    // ???
  }

  return (
    <section>
      <h1>Add New Task</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="New task title..."
          required
        />
        <input
          type="submit"
          value="Add"
        />
      </form>
    </section>
  );
}
 
export default ToDoForm;