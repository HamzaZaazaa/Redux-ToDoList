import React, { useState } from 'react'
import { FormControl, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from "../Redux/actions"




function AddTask() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const hanldeSubmit=(e) => {
        e.preventDefault()
        if(text) {
            dispatch(addTask(text))
            setText('')

        }
    }
  return (
    <Form onSubmit={hanldeSubmit}>
        <FormControl type='text' onChange={e=> setText(e.target.value)} value={text}/>
        <Button type='submit' variant='primary'>Add Task</Button>
    </Form>
  )
}

export default AddTask