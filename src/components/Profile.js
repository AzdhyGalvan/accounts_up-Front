import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';

function Profile({ user }) {
  return (
    <div className='cardCol'>
    <div className="card">
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.imageUrl} />
        <Card.Body>
          <Card.Text><h6>Razon Social:</h6> {user.razonSocial}</Card.Text>
          <Card.Text><h6>RFC:</h6> {user.rfc}</Card.Text>
          <Card.Text><h6>Regimen:</h6> {user.person}</Card.Text>
          <Card.Text><h6>Direccion Fiscal:</h6> {user.fiscalAdress}</Card.Text>
          <Card.Text><h6>Email:</h6>{user.email}</Card.Text>
        </Card.Body>
        <Button variant="info">Editar Perfil</Button>
      </Card>
    </div>
    <div>
    <Card border="primary">
    <Card.Header>
      <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first" >Buscar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Lista</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Gastos</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="secondary">Cargar gasto</Button>
    </Card.Body>
  </Card>
  <br/>
  <Card border="primary">
    <Card.Header>
      <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">Buscar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Lista</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Costos</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Cargar Costo</Button>
    </Card.Body>
  </Card>
  <br/>
  <Card border="primary">
    <Card.Header>
      <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first" >Buscar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Lista</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Ventas</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Cargar Venta</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  );
}

export default Profile;
