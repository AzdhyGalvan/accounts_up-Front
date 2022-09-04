import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link className="Link" to='/'>Accounts_up</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutus">Quienes somos</Nav.Link>
            <div className='ingresa'>
            <NavDropdown  title="Ingresa como cliente" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link  className="Link" to='/signup'>Signup</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <Link  className="Link" to={'/login'} >Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;