const ToDoForm = ({ addNewTask, formInput, setFormInput }) => {

  const formSubmit = e => {
    e.preventDefault();
    addNewTask({
      id: Date.now(),
      isCompleted: false,
      title: formInput
    });
    setFormInput('');
  }

  return (
    <section>
      <h1>Add New Task</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="New task title..."
          required
          value={formInput}
          onChange={(e)=>{setFormInput(e.target.value)}}
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