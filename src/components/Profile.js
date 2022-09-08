import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { editUserWs } from "../services/user.ws";
import { Link } from "react-router-dom";

function Profile({ user }) {
  const [isEdit, setEdit] = useState(false);
  const [isImage, setIsimage] = useState("");

  

  const onChangeimage = (e) => {
    setIsimage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUserWs({ ...e, isImage }).then((res) => {
      const { status, data, errorMessage } = res;
      if (status) {
        user.autenticarion(data.user);
      } else {
        console.log("El error", errorMessage);
      }
    });
  };

  return (
    <div className="cardCol">
      <div className="card">
        {isEdit ? "se puede editar" : "no se puede editar"}
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              onClick={() => console.log("funciono")}
              variant="top"
              src={user.imageUrl}
            />
            <Card.Body>
              <Card.Text>
                <h6>Razon Social:</h6> {user.razonSocial}
              </Card.Text>
              <Card.Text>
                <h6>RFC:</h6> {user.rfc}
              </Card.Text>
              <Card.Text>
                <h6>Regimen:</h6> {user.person}
              </Card.Text>
              <Card.Text>
                <h6>Direccion Fiscal:</h6> {user.fiscalAdress}
              </Card.Text>
              <Card.Text>
                <h6>Email:</h6>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
        <>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Direccion fiscal</Form.Label>
              <Form.Control
                type="text"
                name="fiscalAdress"
                value={user.fiscalAdress}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Cargar imagen de Perfil</Form.Label>
              <Form.Control
                onChange={onChangeimage}
                name="imageUrl"
                type="file"
              />
            </Form.Group>
          </Form>
        </>

        <Button
          onClick={() => setEdit((prevState) => !prevState)}
          variant="info"
        >
          Editar Perfil
        </Button>
      </div>
      <div>
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
            <Card.Title>Gastos</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="secondary"><Link to={'/new-purchase'}>Cargar gasto</Link></Button>
          </Card.Body>
        </Card>
        <br />
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
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary"><Link to={'/new-cost'} >Cargar Costo</Link></Button>
          </Card.Body>
        </Card>
        <br />
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
            <Card.Title>Ventas</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary"><Link to='/new-sale'> Cargar Venta</Link></Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
