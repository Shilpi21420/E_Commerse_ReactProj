import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import AuthContext from '../../store/auth-context';
import Logout from '../Logout/Logout';

export default function Header() {
  const authctx=useContext(AuthContext);
  const login=authctx.isLoggenIn;
  return (<>
   
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
              <Link to="/">
                <Button variant="outline-light" size="sm" className="mx-2">
                  HOME
                </Button>
              </Link>
              { login && 
              <Link to="/store">
                <Button variant="outline-light" size="sm" className="mx-2">
                  STORE
                </Button>
              </Link> }
              <Link to="/about">
                <Button variant="outline-light" size="sm" className="mx-2">
                  ABOUT
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-light" size="sm" className="mx-2">
                  CONTACT US
                </Button>
              </Link>{ !login && 
              <Link to="/auth">
                <Button variant="outline-light" size="sm" className="mx-2">
                  LOGIN
                </Button>
              </Link> }



              
            </Nav>
          </Navbar.Collapse>
          <Logout />
        
        <Cart/>
      </Container>
    </Navbar>
    </>
  )
}
