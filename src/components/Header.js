import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Header.css'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className='navbar'>
    <Container>
    <Navbar.Brand  class="nav-links" href="#home">Al Razi Restaurant</Navbar.Brand>
    <Nav className="mr-auto n1">
      <Nav.Link class="nav-links" href="#home">Home</Nav.Link>
      <Nav.Link class="nav-links" href="#features">Products</Nav.Link>
      <Nav.Link class="nav-links" href="#pricing">Contact us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header