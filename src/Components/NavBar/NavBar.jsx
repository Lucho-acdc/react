import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CardWidget/CardWidget'
import logo from '../../logo.png';


function NavBar() {
  return (
    <>
    <div className='contenedorNav'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#inicio"><img src={logo} alt="logo" className='logoNavBar'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#marvel">Marvel</Nav.Link>
            <Nav.Link href="#dccomics">DC Comics</Nav.Link>
            <Nav.Link href="#combos">Combos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CardWidget />
      </div>
    </>
  );
}

export default NavBar;