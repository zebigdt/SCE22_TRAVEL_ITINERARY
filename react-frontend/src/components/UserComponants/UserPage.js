import AddList from "../AddingComponants/addlist";
import React , { useState, useEffect }from "react";
import {Row,Button,ListGroup,} from "react-bootstrap";
export default function  UserPage()  {
  const [listgiInfo, setlistgiInfo] = useState([]);
  const [listMSP, setListMSP] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/getlists',{
      credentials: "include"
    })
    .then(response => response.json())
    .then(object => setlistgiInfo(object))
  },[]);
  useEffect(() => {
    fetch('http://localhost:5000/getMostSearchedPlaces')
    .then(response => response.json())
    .then(object => setListMSP(object))
  },[]);

  const ListGroupItem = (lgi, index) => {
    return (
      <ListGroup.Item  variant="default" key={index} style={{ textAlign: 'left', color: "white", background: lgi.color }} as="li">
        {lgi.name}
        <form action="http://localhost:5000/removelist" method="post">
        <Button className="float-end" type="submit" name="list_id" variant="danger" value={lgi.id}>remove list</Button>
        </form>
        <form action="http://localhost:5000/viewlist" method="post">
        <Button className="float-end" type="submit" name="list_id" value={lgi.id}>view list</Button>
        </form>
        </ListGroup.Item>
    )
  };
  //Requirement number 208
  const ListMostSearchedPlaces = (msp, index) => {
    return(
      <ListGroup.Item  variant="default" key={index} as="li">
        {msp}   
      </ListGroup.Item>
    )
  }

  return (
    <div className="auth-wrapper-lists">
    <Row>
        <div className="auth-inner-lists">
          <h1>my lists</h1>
          <hr class="my-4"></hr>
      <Row>
        <ListGroup defaultActiveKey="#link1" as="ol" numbered>
          {listgiInfo.map(ListGroupItem)}
        </ListGroup>
      </Row>
      <br/>
      <Row>
        <AddList/>
      </Row>
      </div>
      <br />
      <div className="auth-inner-lists">
      <h1>most searched places:</h1>
      <hr class="my-4"></hr>
      <Row>
        <ListGroup defaultActiveKey="#link1" as="ol" numbered>
          {listMSP.map(ListMostSearchedPlaces)}
          
        </ListGroup>
      </Row>
      </div>
    </Row>
    
    </div>
    
  );
}
