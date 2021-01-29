import React, { useState } from 'react';
import Task from './Task'
import './TaskList.css';

const TaskList = (props) => {
    
  const taskComponents = props.tasks.map((task, i) => {
      return(
      <div key={i} className="container">
        <Task 
        title={task.title} 
        content={task.content} 
        complete={task.complete} 
        id={task.id}
        onUpdateTask={props.onUpdateTask}
        onDeleteTask={props.onDeleteTask}/>
      </div>);
    });

  return (
    taskComponents
  );
};

export default TaskList;