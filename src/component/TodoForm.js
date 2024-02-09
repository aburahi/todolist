import { useState } from "react"
import React from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue]=useState("")
  const handleSubmit =(e)=>
  {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }
  return (
    <form className='TodoForm' on onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='what is the task today?' onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}
