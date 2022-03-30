import {Button, FormControl, Modal} from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edit } from '../Redux/actions';



function EditTask({todo}) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text)
    const dispatch = useDispatch()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="Warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT YOUR TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormControl type='text' value={text} onChange={e=> setText(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> {
                dispatch(Edit(todo.id, text));
                handleClose()
            }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default EditTask