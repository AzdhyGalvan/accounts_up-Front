import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {costsResults} from '../services/results.ws'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function ResultCost(props){

    const [listCost,setListCost] = useState([])
    const [month,setMonth] = useState(null)
    const [all,setAll] = useState()

    const onChangeMonth = e =>{
        setMonth(e.target.value)
        console.log("Que es mi e",e.target.value)
    }

    useEffect(()=>{
        if(month != null){
            costsResults({month})
        .then(res=>{
            setListCost(res.data.months)
            setAll(res.data.sumall)
            console.log("Que es mi res",res)
        })
        }
    },[month])



    return (
        <div>
        <h3>Lista de costos mensual</h3>

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


   {listCost.map((cost)=>(
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th># Id</th>
          <th>Monto</th>
          <th>Proveedor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cost._id}</td>
          <td>${cost.amount}.00</td>
          <td>{cost.supplier} </td>
          
        </tr>
      </tbody>
    </Table>

   ))}
   
   

      </Form>
      </div> 
     

      </div>

    )
}

export default ResultCost