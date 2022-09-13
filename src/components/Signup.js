import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signupWs} from '../services/auth.ws'
import { useNavigate} from 'react-router-dom'


function Signup(props) {
  const navigate= useNavigate()

  const [razonSocial,setRazonS] = useState("")
  const [person,setRegimen] = useState(null)
  const [rfc,setRfc] = useState("")
  const [fiscalAdress,setFiscalAd] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmpassword] = useState("")

const onChangeRazonS = e =>{
  setRazonS(e.target.value)
}
const onChangeRegimen = e =>{
  console.log("que traes",e.target.value)
  setRegimen(e.target.value)
}
const onChangeRfc = e =>{
  setRfc(e.target.value)
}
const onChangeFiscalA = e =>{
  setFiscalAd(e.target.value)
}
const onChangeEmail = e =>{
  setEmail(e.target.value)
}
const onChangePassword = e =>{
  setPassword(e.target.value)
}
const onChangeConfirmpassword = e =>{
  setConfirmpassword(e.target.value)
}

const onSubmit = (e)=>{
  e.preventDefault()
  console.log({razonSocial,person,rfc,fiscalAdress,email,password,confirmPassword})
  signupWs({razonSocial,person,rfc,fiscalAdress,email,password,confirmPassword})
  .then(res=>{
    const {data,status,errorMessage} = res

    if(status){
      console.log("que es mi res",res)
    props.autenticate(res.data.user)
    navigate('/login')
    }
    else{
      

      alert(errorMessage)
    }
    
  })
  
}

  return (
    <div className='pForm'>
    <Form onSubmit={onSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Razon Social</Form.Label>
        <Form.Control onChange={onChangeRazonS} value={razonSocial} name='razonSocial' type="text" placeholder="Ingresa tu razon social" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Regimen</Form.Label>
        <Form.Select onChange={onChangeRegimen} aria-label="Default select example">
          <option value={null}>Elije tu regimen</option>
      <option  value={'Fisica'} name='regimen'>Fisica</option>
      <option  value={'Moral'} name='regimen'>Moral</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>RFC</Form.Label>
        <Form.Control onChange={onChangeRfc} value={rfc} name='rfc'  type="text" placeholder="Ingresa tu RFC" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Direccion Fiscal</Form.Label>
        <Form.Control onChange={onChangeFiscalA} value={fiscalAdress} name='fiscalAdress' type="text" placeholder="Ingresa tu direccion fiscal" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={onChangeEmail} value={email} name='email' type="email" placeholder="name@correo.com" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={onChangePassword} value={password} name='password' type="password" placeholder="Password" required />
        <Form.Text className="text-muted">
         Tu contraseña debe contener minimo 8 caracteres, una mayúscula, una minúscula y un número.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirma tu Contraseña</Form.Label>
        <Form.Control onChange={onChangeConfirmpassword} value={confirmPassword} name='confirmPassword' type="password" placeholder="Password" />
      </Form.Group>

  
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
  );
}

export default Signup;