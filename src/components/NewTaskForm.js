import React, { useState } from 'react';
import './NewTaskForm.css';


const NewTaskForm = (props) => {

    const [formFields, setFormFields] = useState({
        title: '',
        content: '',
        complete: false
    });


    const onInputChange = (event) => {
        console.log(`Content Field updated ${ event.target.value }`);
    
        const newFormFields = {
            ...formFields,
        }


        newFormFields[event.target.name]=event.target.value
        setFormFields(newFormFields);
    };
    
    const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form.
    event.preventDefault();

    props.addTaskCallback(formFields);
    
    // ... We need to add the student to the list.
    setFormFields({
        title: '',
        content: '',
        complete: false
    });
    };
    

  return (
    <form className="new-task-form" onSubmit={onFormSubmit} className="task">
      <div>
        <label htmlFor="title">Title:</label>
        <input 
            name="title"
            onChange={onInputChange}
            value={formFields.title} 
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input 
            name="content" 
            onChange={onInputChange}
            value={formFields.content} 
        />
      </div>
      <input
        type="submit"
        value="Add Task"
      />
    </form>
  );
}

export default NewTaskForm;