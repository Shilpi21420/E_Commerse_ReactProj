import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Logout (){
  const history = useHistory();
  function logOut(){

    localStorage.clear();
    history.push('/auth');
  }
  return(
    <div>
      <Navbar bg="light" varient="light">
        <Nav>
          <NavDropdown title="LOGOUT">
            <NavDropdown.Item onClick={logOut}>LOGOUT</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>


  );


}
export default Logout;








