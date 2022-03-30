import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo'
function ToDoList() {
    const todos = useSelector(state => state.toDoReducer.tasks)

  return (
    <div>
       {
           todos.map((todo)=> <ToDo key={todo.id} todo={todo}/>)
       }
    </div>
  )
}

export default ToDoList