import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {newSaleWs} from '../services/sales.ws'
import { useNavigate} from 'react-router-dom'
function NewSale(props){
  const navigate= useNavigate()
    const [month,setMonth] = useState(null)
    const [year,setYear] = useState (null)
    const [client,setClient] = useState("")
    const [amount,setAmount] = useState("")

    console.log("que es mi props.user",props.user)

    const onChangeMonth = e =>{
        setMonth(e.target.value)
    }
    const onChangeYear = e =>{
        setYear(e.target.value)
    }
    const onChangeClient = e =>{
        setClient(e.target.value)
    }
    const onChangeAmount = e =>{
        setAmount(e.target.value)
    }

    const onSubmit= (e) =>{
        e.preventDefault()
        
        newSaleWs({month,year,client,amount})
        .then(res=>{
            const {data,status,errorMessage} = res
        
            if(status){
           
                alert("Tu venta se ha cargado")
                navigate('/list-ventas')
            }
            else{
              
        
              alert(errorMessage)
            }
            
          })
    }


    return(
<div>
     <h3>Cargar Venta</h3> 
    <Form className='pForm2' onSubmit={onSubmit}>
    <Form.Select onChange={onChangeMonth} aria-label="Default select example">
      <option value={null}  >Selecciona el mes que se efectuo la venta:</option>
      <option value="Enero" name='month' >Enero</option>
      <option value="Febrero"  name='month'>Febrero</option>
      <option value="Marzo"  name='month'>Marzo</option>
      <option value="Abril"  name='month'>Abril</option>
      <option value="Mayo"  name='month'>Mayo</option>
      <option value="Junio"  name='month'>Junio</option>
      <option value="Julio"  name='month'>Julio</option>
      <option value="Agosto"  name='month'>Agosto</option>
      <option value="Septiembre"  name='month'>Septiembre</option>
      <option value="Octubre"  name='month'>Octubre</option>
      <option value="Noviembre"  name='month'>Noviembre</option>
      <option value="Diciembre"  name='month'>Diciembre</option>
    </Form.Select>
    <br/>
    <Form.Select onChange={onChangeYear} aria-label="Default select example">
      <option value={null}>Selecciona el a??o que se efectuo la venta:</option>
      <option value="2021"  name='year'>2021</option>
      <option value="2022"  name='year'>2022</option>
    </Form.Select>
    <Form.Group className="mb-3" >
        <Form.Label>Cliente:</Form.Label>
        <Form.Control onChange={onChangeClient} value={client} name='client' type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Importe:</Form.Label>
        <Form.Control onChange={onChangeAmount} value={amount} name='amount' type="number"  />
    </Form.Group>

    <Button variant="primary" type="submit">
        Guardar
      </Button>

      </Form>
      </div>
    )
}

export default NewSale;