import React from 'react';
import './Task.css';

const Task = (props) => {

  const handleCheckBox = () => {
      const updatedTask = {
          title: props.title,
          content: props.content,
          complete: !props.complete,
          id: props.id
      }
      props.onUpdateTask(updatedTask)
    }

    const handleDeleteClick = () => {
        const deletedTask = {
            id: props.id
        }
        props.onDeleteTask(deletedTask)
      }
      

  // Component functions always return JSX
  return (
    <div className='task'>
        <div className={props.complete ? 'done' : 'incomplete'}>
            <h3>{props.title}</h3>
            <p>{props.content}</p> 
        </div>
      {/* Note that we will get into what's happening in this line in the Events lesson, coming up next! */}
      <input
            name="isComplete"            
            type="checkbox"
            checked={props.complete}
            onChange={handleCheckBox} 
        />
        <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
};

export default Task;