import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <div className='pForm'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Razon Social</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu razon social" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Regimen</Form.Label>
        <Form.Select aria-label="Default select example">
      <option value="1">Fisica</option>
      <option value="2">Moral</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>RFC</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu RFC" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Direccion Fiscal</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu direccion fiscal" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@correo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
         Tu contraseña debe contener minimo 8 caracteres, una mayúscula, una minúscula y un número.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirma tu Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
  );
}

export default Signup;