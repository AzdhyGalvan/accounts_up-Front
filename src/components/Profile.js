import { useState,useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { editUserWs } from "../services/user.ws";

import { uploadSingle } from "../services/upload-file";
import { Link } from "react-router-dom";



function Profile({ user,autenticate }) {


  const [isEdit,setIsEdit] = useState(false)
  const [img, setImage] = useState(user.imageUrl);
  const [fiscalAdressN,setFiscal] = useState(user.fiscalAdress)
  const elInput = useRef('input')
 



  const abrirImagen= () =>{
    console.log("la ref",elInput)
    elInput.current.click()
  }

    const cambiarImagen = (e) =>{
      console.log("la ref",e.target.files[0])
      //const sendImg ={image :e.target.files[0]}

      const formData = new FormData()

      formData.append('image',e.target.files[0])
      uploadSingle(formData)

      .then(res=>{
        const {data,status,errorMessage} = res
        
            if(status){
              console.log("que es mi res",res)
              setImage(res.data.url.uri)
                alert("Tu datos han sido actualizados")
            }
            else{
              
        
              alert(errorMessage)
            }
      })
      .catch(error=>{
        console.log("Cual es mi error",error)
      })
      
    }

    

    const onChangeAdress = (e) =>{
        setFiscal(e.target.value)
    }




    const submitData = () =>{
      editUserWs({imageUrl:img,fiscalAdress:fiscalAdressN})
      .then(res=>{
        console.log("TodoBien",res)
        autenticate(res.data.user)
        
      })
      .catch(error=>{
        console.log("Cual es mi error",error)
      })

    }



  return (
    <div className="cardCol">
      <div className="card">
        
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img 
              variant="top"
              src={typeof img != 'string' ? URL.createObjectURL(img) : img}
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
        {isEdit ? 
        <>
       
        <div className="buttonImg">
          <Button size="sm" variant="secondary" onClick={abrirImagen} >Editar Foto de Perfil </Button>
          <input ref={elInput} type={'file'} hidden onChange={cambiarImagen}  ></input>
            </div>
            <div className="buttonImg">
          <label><h6>Direccion Fiscal:</h6></label>
          
          <input name="fiscalAdress" value={fiscalAdressN} onChange={onChangeAdress}></input>
        </div>
       <br/>
        <Button
          onClick={submitData}
          variant="info"
        >
          Guardar cambios
        </Button>
        </>
  : 
  
        <Button
        onClick={() => setIsEdit((prevState) => !prevState)}
          variant="info"
          size="lg"
        >
          Editar datos
        </Button>
}


      </div>
      <div>
        <Card border="primary">
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link><Link className='linkFooter2' to={"/list-purchases"}>Lista</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link className='linkFooter2' to={"/new-purchase"}>Cargar gasto</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Gastos</Card.Title>

          </Card.Body>
        </Card>
        <br />
        <Card border="primary">
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link><Link className='linkFooter' to={"/list-costs"} >Lista</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link className='linkFooter' to={"/new-cost"} >Cargar Costo</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Costos</Card.Title>
          </Card.Body>
        </Card>
        <br />
        <Card border="primary">
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link><Link className='linkFooter' to={"/list-ventas"} >Lista</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link className='linkFooter' to={"/new-sale"}>Cargar Venta</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Ventas</Card.Title>
          </Card.Body>
        </Card>

        <br/><br/>

        <Button><Link className='linkFooter' to={"/global-results"}>Resultados globales</Link></Button>
       
      </div>
    </div>
  );
}

export default Profile;
