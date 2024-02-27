import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, trintiTask }) => {
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
            />
          )
        }
      </div>
    </section>
  );
}
 
export default ToDoList;