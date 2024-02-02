import Task from "./Task.js";

document
  .querySelector('#newTask > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    const task = {
      name: e.target.elements.task.value,
      completed: false,
      id: new Date()*1
    };
    const tasksInLocalStorage = JSON.parse(localStorage.getItem('toDoApp'));
    tasksInLocalStorage.push(task);
    localStorage.setItem('toDoApp', JSON.stringify(tasksInLocalStorage));

    const node = new Task(task);
    document.querySelector('#tasks > ul').appendChild(node);
    e.target.reset();
});

// const startingData = [
//   {
//     name: 'take out the trash',
//     completed: false,
//     id: 651684136510
//   },{
//     name: 'walk the dog',
//     completed: true,
//     id: 651684136511
//   }
// ];
// localStorage.setItem('toDoApp', JSON.stringify(startingData));

JSON.parse(localStorage.getItem('toDoApp')).forEach(task => 
  document.querySelector('#tasks > ul').appendChild(new Task(task))
);