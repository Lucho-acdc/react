import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='contenedorNav'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="logo" className='logoNavBar'/></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/category/marvel">Marvel</Link>
            <Link to="/category/dccomics">DC Comics</Link>
            <Link to="/category/combos">Combos</Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/cart"> <CartWidget /> </Link>
      </div>
    </>
  );
}

export default NavBar;