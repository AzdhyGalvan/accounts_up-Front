import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {loginWs} from '../services/auth.ws'

function Login() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


const onChangeEmail = e =>{
setEmail(e.target.value)
}
const onChangePassword = e =>{
  setPassword(e.target.value)
  }

const onSubmit =(e) =>{
  e.preventDefault()
 
  console.log("enviar",email,password)

  loginWs({email,password})
  .then(res=>{
    console.log("El res",res)
  })
  .catch(error=>{
    console.log("Cual es el error",error)
  })
}


  return (
    <div className='pForm'>
    <Form onSubmit={onSubmit}   > 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control onChange={onChangeEmail} value={email} name='email' type="email" placeholder="name@correo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={onChangePassword} value={password} name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </div>
  );
}

export default Login;