import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar({ user, handleLogOut }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link className='linkFooter' to={"/"}>Accounts_<h7>up</h7></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='linkFooter' to='/aboutus'>Quienes somos..</Link> </Nav.Link>
            <div className="ingresa">
              {!user && 
                <NavDropdown
                  title="Ingresa como cliente"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item ><Link className='linkFooter' to={"/signup"}>Registro</Link> </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link className='linkFooter' to={"/login"}>Iniciar Sesión</Link></NavDropdown.Item>
                </NavDropdown>
              }
            </div>
          </Nav>
          {user && 
                <Nav className="me-auto">
                
                <Nav ><Link className='linkFooter' to={'/profile'}><h7>{user.razonSocial} <br/> {user.rfc} </h7></Link></Nav>
                <Nav onClick={handleLogOut}>Salir</Nav>
                </Nav>
                }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
