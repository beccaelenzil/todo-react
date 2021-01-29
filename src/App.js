import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList'


function App() {
  const [taskList, setTaskList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() =>{
    axios.get("http://localhost:5000/")
      .then((response) => {
        const apiTaskList = response.data
        setTaskList(apiTaskList)
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
    }, []);

  const addTask = (task) => {

    axios.post("http://localhost:5000/tasks", task)
      .then((response) => {
        // What should we do when we know the post request worked?
        const newTasks = [...taskList, response.data]
        setTaskList(newTasks);
        setErrorMessage('');


      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        setErrorMessage(error.message);
      });
  }

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
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      <NewTaskForm addTaskCallback={addTask}/>
      <TaskList 
        tasks={taskList} 
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
