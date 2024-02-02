export default class Task{
  constructor({ name, completed, id }){
    this.name = name;
    this.completed = completed;
    this.id = id;
    return this.render();
  }
  render(){
    const li = document.createElement('li');
    this.completed && li.classList.add('done');

    li.addEventListener('click', () => {
      li.classList.toggle('done');

      const tasksInLocalStorage = JSON.parse(localStorage.getItem('toDoApp'));
      
      // const changedTasks = tasksInLocalStorage.map(task => {
      //   if(task.id === this.id){
      //     return {
      //       ...task,
      //       completed: !task.completed
      //     }
      //   } else {
      //     return task;
      //   }
      // });

      const changedTasks = tasksInLocalStorage.map(
        task => task.id === this.id ? {...task, completed:!task.completed} : task
      );
      
      localStorage.setItem('toDoApp', JSON.stringify(changedTasks));
    });

    const taskName = document.createElement('h3');
    const taskNameText = document.createTextNode(this.name);
    taskName.appendChild(taskNameText);

    const delIcon = document.createElement('i');
    delIcon.classList.add('bi');
    delIcon.classList.add('bi-trash-fill');

    delIcon.addEventListener('click', () => {
      li.remove();

      const tasksInLocalStorage = JSON.parse(localStorage.getItem('toDoApp'));
      
      const notDeletedTasks = tasksInLocalStorage.filter(task => task.id !== this.id);
      
      localStorage.setItem('toDoApp', JSON.stringify(notDeletedTasks));
    });

    li.append(taskName, delIcon);
    return li;
  }
}