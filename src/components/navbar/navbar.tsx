import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

import "./navbar.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='head'><Link to="/" className='nav-item'>Houssem Reagieg</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-bar" defaultActiveKey="#home">
            <Nav.Link href="#home" ><Link to="/" className='nav-item'>Home</Link></Nav.Link>
            <Nav.Link href="#link" ><Link to="/about" className='nav-item'>About</Link></Nav.Link>
            <Nav.Link href="#link" ><Link to="/education" className='nav-item'>Education</Link></Nav.Link>
            <Nav.Link href="#link" ><Link to="/skills" className='nav-item'>Skills</Link></Nav.Link>
            <Nav.Link href="#link" ><Link to="/contact" className='nav-item'>Contact</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar;
