import React, { useState } from "react";
import {  Modal } from "react-bootstrap";



//requirement number 2 + 102 + 202
export default function Login() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
   
    return (
        <>
      
        
        <Modal show={show}  onHide={handleClose}>
        <form action='http://localhost:5000/login' method='post' >
        <Modal.Header closeButton>
          <Modal.Title><h3> Sign In</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
            <div className="form-group">
                <label>Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
             
              </div>
              <a href="http://3000/forgotpassword" >forgot pass</a>
       </Modal.Body>
        <Modal.Footer>
        <button type="submit" className="btn btn-primary btn-block" >
                log in
              </button>
        </Modal.Footer>
        </form>
      </Modal>
        </> 
       ); 
      }
      