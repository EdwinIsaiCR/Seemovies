/* import './Menu.css'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Menu(){
    return (
    <header className='container-fluid'>
        <nav className='row'>
            <div className='nav-logo-colum'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/763/186/original/valorant-logo-transparent-free-png.png" alt="" width="100px" />
            </div>
            <div className='nav-options-colum'>
                <ul>
                    <li><NavLink to="/comedia">Comedia</NavLink></li>
                    <li><NavLink to="/independientes">Independientes</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
    )
} */

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

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
            <Nav.Link href="/comedia">Comedia</Nav.Link>
            <Nav.Link href="/independientes">Independientes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
