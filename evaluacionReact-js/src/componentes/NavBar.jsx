import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Usuario from './usuario';

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='titulo'>examen registro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">registro</Nav.Link>
            <NavDropdown title="mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Usuario/>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar