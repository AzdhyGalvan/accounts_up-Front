import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {loginWs} from '../services/auth.ws'
import {useNavigate} from 'react-router-dom'

function Login(props) {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const onChangeEmail = e =>{
setEmail(e.target.value)
}
const onChangePassword = e =>{
  setPassword(e.target.value)
  }

const onSubmit =(e) =>{
  e.preventDefault()
 
  
  loginWs({email,password})

  .then(res=>{
    const {data,status,errorMessage} = res

    if (status){
      props.autenticate(res.data.user)
      navigate('/profile')
      return alert ("Bienvenido")
    }
    else{
      alert(errorMessage)
    }
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
    <br/>
    <br/>
    </div>
  );
}

export default Login;