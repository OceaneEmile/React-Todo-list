import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {

  const [value,setValue] = useState(task.task);

  const handleSubmit = (e) =>{ 
    e.preventDefault();

    editTodo(value,task.id);

    setValue("");
  }
  return ( 
    <form onSubmit={handleSubmit} className="TodoForm">   
      <input type='text' className='todo-input' value={value} placeholder='update task'  onChange= {(e) =>setValue(e.target.value)}/>
        
        <button type='submit'className='todo-button'>UpdateTask</button>
    </form>
  )
}