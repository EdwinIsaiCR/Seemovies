import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/019/017/450/original/valorant-logo-transparent-free-png.png" 
            alt="SeeMovie Logo" 
            width="50"
            className="me-2"
          />
          <span className="fw-bold">See<span className="text-danger">Movie</span></span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/comedia" className="mx-2">Comedia</Nav.Link>
            <Nav.Link as={Link} to="/independientes" className="mx-2">Independientes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}