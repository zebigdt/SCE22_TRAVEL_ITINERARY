import React , { useState, useEffect, }from "react";
import {Button,Modal} from "react-bootstrap";
import ContactUs from "./ContactUs";
import SubmitBugReportUser from "./SubmitBugReportUser";
import { BsQuestionOctagonFill } from 'react-icons/bs';
import Suggestions from "./Suggestions";

const ButtonStyle2={
    color:"black",
    height:"50px",
    borderColor:"black",
    backgroundColor:"Lightgreen",
    margin:"10px",
    width:"200px",
    height:"50px",
    
  }

  const ButtonStyle1={
    position: 'absolute',
    bottom:0,
    left:"100px",
    top:"26px",
    mergin:"10px",
    borderColor:"black",
    color:"black",
    height:"35px",
   borderColor:"black",
    backgroundColor:"Lightblue",
    margin:"10px",
  }
  
export default function UserHelp()  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const [ShowUserList, setUserList] = useState([]);

     useEffect(() => {
        fetch('http://localhost:5000/getUserlist',{
            credentials: "include"
         })
          .then(response => response.json())
           .then(object => setUserList(object))
        },[]);

return (
    <>

    <Button style={ButtonStyle1} variant="primary" onClick={handleShow}>Help</Button>
    <Modal  show={show} onHide={handleClose}>
    <form action='http://localhost:5000/login' method='post' >
    <Modal.Header closeButton>
      <Modal.Title><h3> Help options:</h3></Modal.Title>
      
    </Modal.Header>
    <Modal.Body>
    <Button style={ButtonStyle2} href="/FAQ"><BsQuestionOctagonFill/>FAQ </Button>
    <SubmitBugReportUser/>
    <ContactUs/>
    <Suggestions/>
   </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
    </form>
  </Modal>
    </> 
   ); 
  }