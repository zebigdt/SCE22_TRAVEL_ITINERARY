import React , { useState, useEffect}from "react";
import {Button,Modal,Table} from "react-bootstrap";
import { BiEnvelope } from 'react-icons/bi';
import AddAnswer from "./AddAnswer";
const ButtonStyle1={
  mergin:"10px",
  color:"black",
  height:"50px",
 borderColor:"black",
  backgroundColor:"Lightblue",
  margin:"10px",
}
//Requirement 110
export default function TechMesseges()  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const [ShowMsglist, setMsgList] = useState([]);
    const[rating,setRatingTech]=useState();



    useEffect(() => {
      fetch('http://localhost:5000/GetTechSupportRating',{
          credentials: "include"
       })
        .then(response => response.json())
         .then(object => setRatingTech(object))
      },[]);
      
      
     useEffect(() => {
        fetch('http://localhost:5000//getAllMessageTech',{
            credentials: "include"
         })
          .then(response => response.json())
           .then(object => setMsgList(object))
        },[]);
    const ListMsg = (msg) => {

      return (
        <tr>
        <td>{msg.id}</td>
        <td>{msg.title}</td>
        <td>{msg.description}</td>
        <td>{msg.answer}</td>
        <td><AddAnswer id={msg.id} /></td>   
        <td>{msg.rating}</td>
             
        

     </tr>
             )   
  };
 return (
    <>


<Button style={ButtonStyle1}  onClick={handleShow}><BiEnvelope/>Support Tickets</Button>
  <Modal size="lg" show={show} onHide={handleClose}>
  <form action='http://localhost:5000//getAllMessageTech' method='post' name="id" >
  <Modal.Header closeButton>
    <Modal.Title><h3> Your rating is : {rating}</h3></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{'height': '300px', 'overflow':'scroll', 'display': 'block',}}>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
    
       <th>message id</th>
       <th>title</th>
       <th>Description</th>
       <th>answer</th>
       
    </tr>
  </thead>
  <tbody>
 {ShowMsglist.map(ListMsg)} 
  </tbody>
</Table>
</div>
   </Modal.Body>
    <Modal.Footer>     
    </Modal.Footer>
    </form>
  </Modal>
    </> 
   ); 
 }
