import React ,{ useState }from "react";
import {Button,Modal} from "react-bootstrap";

//Requirement number 7
export default function  AddEquipment()  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      
        <>
      <Button variant="primary" onClick={handleShow}>
      add equipment
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form action='http://localhost:5000/addEquipment' method='post'>
        <Modal.Header closeButton>
          <Modal.Title><h3>add equipment</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
          <label>Name of equipment:</label>
          <input
            name="equipment_name"
            className="form-control"
            placeholder="Enter name for your equipment"
            required
          />
        </div>
       </Modal.Body>
        <Modal.Footer>
        <Button type="submit" variant="primary" >
          add
         </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>   
    );
  
}
