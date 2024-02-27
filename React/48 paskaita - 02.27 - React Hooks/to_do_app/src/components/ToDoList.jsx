import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, trintiTask, changeTaskStatus }) => {
  // console.log(tasks);
  return (
    <section>
      <h1>Tasks To Do</h1>
      <div>
        {
          tasks.map(task => 
            <ToDoItem
              key={task.id}
              task={task}
              trintiTask={trintiTask}
              changeTaskStatus={changeTaskStatus}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default ToDoList;