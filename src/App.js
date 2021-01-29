import React, {useState} from 'react'
import './App.css';
import TaskList from './components/TaskList'

const tasksData = [
  {
    title: "Learn Flask",
    content: "make an api",
    complete: false,
    id: 1
  },
  {
    title: "Review React",
    content: "make a tasklist front end",
    complete: false,
    id: 2
  },
  {
    title: "Ada Build",
    content: "make video lessons",
    complete: false,
    id: 3
  },
  {
    title: "Learn Flask",
    content: "make an api",
    complete: false,
    id: 4
  },
  {
    title: "Review React",
    content: "make a tasklist front end",
    complete: false,
    id: 5
  },
  {
    title: "Ada Build",
    content: "make video lessons",
    complete: false,
    id: 6
  },
];


function App() {
  const [taskList, setTaskList] = useState(tasksData);

  const updateTask = (updatedTask) => {
    const tasks = [];

    taskList.forEach((task) => {
      
      if (task.id === updatedTask.id) {
        console.log(updatedTask.title)
        tasks.push(updatedTask);
      } else {
        tasks.push(task);
      }
    });

    setTaskList(tasks);
  }

  const deleteTask = (deletedTask) => {
    const tasks = [];

    taskList.forEach((task) => {
      
      if (task.id !== deletedTask.id) {
        tasks.push(task);
      }
    });

    setTaskList(tasks);
  }

  return (
    <div className="App">
      <TaskList 
        tasks={taskList} 
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
