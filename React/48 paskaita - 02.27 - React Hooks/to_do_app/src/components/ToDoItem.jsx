const ToDoItem = ({ task, trintiTask, changeTaskStatus }) => {
  return (
    <div className='toDoItem'>
      <h3>{task.title}</h3>
      <button
        onClick={() => trintiTask(task.id)}
      >Trinti</button>
      {
        task.isCompleted ?
        <button
          onClick={() => changeTaskStatus(task.id)}
        >UnComplete Task</button> :
        <button
          onClick={() => changeTaskStatus(task.id)}
        >Complete Task</button>
      }
    </div>
  );
}
 
export default ToDoItem;