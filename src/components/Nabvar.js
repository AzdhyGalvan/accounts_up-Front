import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar({ user, handleLogOut }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Accounts<h7>_up</h7></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutus">Quienes somos</Nav.Link>
            <div className="ingresa">
              {!user && 
                <NavDropdown
                  title="Ingresa como cliente"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/signup">Registro</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login"> Iniciar Sesión </NavDropdown.Item>
                </NavDropdown>
              }
            </div>
          </Nav>
          {user && 
                <Nav className="me-auto">
                <Nav ><Link to={'/profile'}>{user.razonSocial} <br/> {user.rfc}</Link></Nav>
                <Nav onClick={handleLogOut}>Salir</Nav>
                </Nav>
                }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
