import React,{ useState } from "react";
import {Button,Modal} from "react-bootstrap";
import { AiFillEdit } from 'react-icons/ai';

const ButtonStyle1={
  mergin:"10px",
  borderColor:"black",
  width: '150px',
  height: '30px',
  backgroundColor:"grey",
  color:"black",
}



export default function  EditFAQ(props)  {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);  

return (
  <>

  <Button style={ButtonStyle1} variant="primary" onClick={handleShow}><AiFillEdit/>Edit FAQ</Button>
  <Modal show={show} onHide={handleClose}>
  <form action='http://localhost:5000/updateFAQ' method='post' >
  <Modal.Header closeButton>
    <Modal.Title><h3> Edit FAQ</h3></Modal.Title>
  </Modal.Header>
  <Modal.Body>



  <div className="form-group">
          <label>Question id</label>
          <input
          
            name="id"
            type="id"
            className="form-control"
            placeholder="Enter question id"
            value={props.id}
            />
        </div>
      <div className="form-group">
          <label>question :</label>
          <input
            name="question"
            type="text"
            className="form-control"
            placeholder={props.question}
            value={props.question}
            
            />
        </div>
        <div className="form-group">
          <label>New answer</label>
          <input
            name="answer"
            type="text"
            className="form-control"
            placeholder={props.answer}
            required
            />
        </div>
 </Modal.Body>
  <Modal.Footer>
  <button type="submit" className="btn btn-primary btn-block" >
          Sumbit
        </button>
  </Modal.Footer>
  </form>
</Modal>
  </> 
 ); 
}
