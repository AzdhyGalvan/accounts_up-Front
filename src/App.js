import './App.css';
import NavBar from './components/Nabvar';
import Footer from './components/Footer'
import routes from './config/routes'
import {Routes,Route, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { logoutWs } from './services/auth.ws';



function App() {
//const autenticate
  const [user,setUser]= useState(null)
const navigate = useNavigate()

  const autenticate = (user) =>{
    setUser(user)
    localStorage.setItem('user',JSON.stringify(user))//convertir a texto
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleLogOut = () =>{
{/**<Modal.Dialog  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Estas seguro de Cerrar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
  </Modal.Dialog>**/}

  logoutWs()
  .then((res)=>{
    {/**const {data,status,errorMessage} = res
    if(status){
    }
    else{
      alert(errorMessage)
    }**/}
    navigate('/')
    setUser(null)
    localStorage.removeItem('user')
    
    
   
  })
  


    
    
  }
  useEffect(()=>{//para saber si nuestro ususario esta login 
    const userLocal= localStorage.getItem('user')
    if(userLocal){
      setUser(JSON.parse(userLocal))//lo convierte a objeto
    }
  },[])

  console.log("que es mi user",user)


  return (
    <div className="App">
      <NavBar user= {user} handleLogOut={handleLogOut}/>
      <br/>
      <Routes>
        {routes({user,handleLogOut,autenticate}).map(({path,element},index_route)=> <Route key={path} {...{path,element}}/>)}
      </Routes>
      <Footer/>
     
      
      
     
    </div>
  );
}

export default App;
