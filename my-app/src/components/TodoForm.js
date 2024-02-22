import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='what is the task today?' />
        <button type='submit'className='todo-button'>Add Task</button>
    </form>
  )
}
