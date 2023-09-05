import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" bg="info">
      <Container fluid>
        <Navbar.Brand href="/"><img src="https://static.vecteezy.com/system/resources/previews/019/017/450/original/valorant-logo-transparent-free-png.png" alt="" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="/comedia">Comedia</NavLink>
            <NavLink href="/independientes">Independientes</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
