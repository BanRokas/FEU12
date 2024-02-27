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
    
  }

  return (
    <>
      <ToDoList
        tasks={tasks}
        trintiTask={trintiTask}
      />
    </>
  );
}

export default App;