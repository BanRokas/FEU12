import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      isCompleted: true,
      title: 'Walk the dog'
    },{
      id: 1,
      isCompleted: true,
      title: 'Drink some tea'
    },{
      id: 2,
      isCompleted: false,
      title: 'Go to gym'
    },{
      id: 3,
      isCompleted: false,
      title: 'Have a good night sleep'
    }
  ]);
  const trintiTask = (id) => {
    console.log('triname', id);
    setTasks(tasks.filter(task => task.id !== id));
  }
  const changeTaskStatus = (id) => {
    console.log('keiciu statusa', id);
    setTasks(tasks.map(task => {
      if(task.id === id){
        return {
          // id: task.id,
          // isCompleted: !task.isCompleted,
          // title: task.title
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        // return {
        //   id: task.id,
        //   isCompleted: task.isCompleted,
        //   title: task.title
        // }
        return task;
      }
    }));
  }

  return (
    <>
      <ToDoList
        tasks={tasks}
        trintiTask={trintiTask}
        changeTaskStatus={changeTaskStatus}
      />
    </>
  );
}

export default App;