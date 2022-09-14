import Form from 'react-bootstrap/Form';
import {purchasesResults} from '../services/results.ws'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ResultPurchase(){

    const [listPurchase,setListPursache] = useState([])
    const [month,setMonth] = useState(null)
    const [all,setAll] = useState()

    const onChangeMonth = e =>{
        setMonth(e.target.value)
        console.log("Que es mi e",e.target.value)
    }

    useEffect(()=>{
        if(month != null){
            purchasesResults({month})
        .then(res=>{
            setListPursache(res.data.months)
            setAll(res.data.totalMonth)
            console.log("Que es mi res",res)
        })
        }
    },[month])



    return (
        <div>
        <h3>Lista de Gastos Mensual</h3>

     <div className='tableA'>  
     <div>
    
    <p>Total mensual <h5>${all}.00</h5> </p>
    
    </div>
    <Form className='pForm2'>
    <Form.Select onChange={onChangeMonth}  aria-label="Default select example">
      <option value={null}  >Selecciona el mes:</option>
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


   {listPurchase.map((cost)=>(
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nomina</th>
          <th>Impuestos</th>
          <th>Luz</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${cost.payroll}.00</td>
          <td>${cost.taxes}.00</td>
          <td>${cost.ligth}.00</td>
          <td>${cost.phone}.00</td>          
        </tr>
      </tbody>
    </Table>

   ))}
   
   

      </Form>
      </div> 
     

      </div>

    )
}

export default ResultPurchase;