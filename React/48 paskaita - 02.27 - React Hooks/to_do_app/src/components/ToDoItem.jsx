const ToDoItem = ({ task, trintiTask }) => {
  return (
    <div className='toDoItem'>
      <h3>{task.title}</h3>
      <button
        onClick={() => trintiTask(task.id)}
      >Trinti</button>
    </div>
  );
}
 
export default ToDoItem;