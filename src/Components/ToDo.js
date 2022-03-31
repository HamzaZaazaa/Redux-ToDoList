import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {deletetask, done} from '../Redux/actions'
import EditTask from './EditTask'


export default function ToDo({todo}) {
    const dispatch =useDispatch()
  return (
    <div className='tasks'>
        <p style={{textDecoration:todo.process ? "line-through": null}}>{todo.text}</p>
        <Button variant="success" onClick={()=> dispatch(done(todo.id))}>Completed</Button>
        <Button variant="danger" onClick={()=> dispatch(deletetask(todo.id))}>Delete</Button>
        <EditTask todo={todo} />
        
    </div>
  )
}
