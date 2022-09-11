
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import  {newPurchaseWs} from '../services/purchase.ws'


function NewPurchase(props){


    const [month,setMonth] = useState(null)
    const [year,setYear] = useState (null)
    const [payroll,setPayRoll] = useState("")
    const [taxes,setTaxes] = useState("")
    const [ligth,setLigth] = useState("")
    const [phone,setPhone] = useState("")

    console.log("que es mi props.user",props.user)

    const onChangeMonth = e =>{
        setMonth(e.target.value)
    }
    const onChangeYear = e =>{
        setYear(e.target.value)
    }
    const onChangePay = e =>{
        setPayRoll(e.target.value)
    }
    const onChangeTaxes = e =>{
        setTaxes(e.target.value)
    }
    const onChangeLigth = e =>{
        setLigth(e.target.value)
    }
    const onChangePhone = e =>{
        setPhone(e.target.value)
    }

    const onSubmit= (e) =>{
        e.preventDefault()
        console.log({month,year,payroll,taxes,ligth,phone})
        newPurchaseWs({month,year,payroll,taxes,ligth,phone})
        .then(res=>{
            const {data,status,errorMessage} = res
        
            if(status){
              console.log("que es mi res",res)
                alert("Tu gasto se ha cargado")
            }
            else{
              
        
              alert(errorMessage)
            }
            
          })
    }







    return(
        <div>
     <h3>Cargar venta</h3> 
    <Form className='pForm2' onSubmit={onSubmit}>
    <Form.Select onChange={onChangeMonth} aria-label="Default select example">
      <option value={null}  >Selecciona el mes que se efectuo el costo:</option>
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
      <option value={null}>Selecciona el año que se efectuo el costo:</option>
      <option value="2021"  name='year'>2021</option>
      <option value="2022"  name='year'>2022</option>
    </Form.Select>
    <Form.Group className="mb-3" >
        <Form.Label>Nomina:</Form.Label>
        <Form.Control onChange={onChangePay} value={payroll} name='payroll' defaultValue={0} type="number"  />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Impuestos</Form.Label>
        <Form.Control onChange={onChangeTaxes} value={taxes} name='taxes' defaultValue={0}  type="number"  />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Luz</Form.Label>
        <Form.Control onChange={onChangeLigth} value={ligth} name='ligth' defaultValue={0} type="number"  />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Telefono</Form.Label>
        <Form.Control onChange={onChangePhone} value={phone} name='phone' defaultValue={0} type="number"  />
    </Form.Group>

    <Button variant="primary" type="submit">
        Guardar
      </Button>

      </Form>
      </div>
    )
}

export default NewPurchase;