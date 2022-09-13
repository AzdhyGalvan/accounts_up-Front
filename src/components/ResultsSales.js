import Form from 'react-bootstrap/Form';
import {salesResults} from '../services/results.ws'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {deleteSaleWs} from '../services/sales.ws'
import Item from 'antd/lib/list/Item';

function ResultSales(props){

    const [listSales,setListSales] = useState([])
    const [month,setMonth] = useState(null)
    const [all,setAll] = useState()
    const [delet,setDelet] = useState({})



    const onChangeMonth = e =>{
        setMonth(e.target.value)
        console.log("Que es mi e",e.target.value)
    }


   

const onClickDelete =(id,idArr)=>{

  deleteSaleWs(id)
  .then(()=>{
    
    const newArr = listSales
    console.log("Se ha eliminado",newArr)
    setListSales(newArr.filter(item=>item._id != id))
  })
  .catch(error=>{
    console.log("Cual es mi error",error)
  })
}



    useEffect(()=>{
        if(month != null){
            salesResults({month})
        .then(res=>{
            setListSales(res.data.months)
            setAll(res.data.sumall)
            console.log("Que es mi res",res)
        })
        }
    },[month])



    return (
        <div>
        <h3>Lista de ventas mensual</h3>

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


   {listSales.map((cost,index)=>(
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th># Id</th>
          <th>Monto</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cost._id}</td>
          <td>${cost.amount}.00</td>
          <td>{cost.client} </td>
          <td>Editar</td>
          <td><button onClick={(e)=> {
            e.preventDefault()
             onClickDelete(cost._id,index)}}>Borrar</button></td>
          
        </tr>
      </tbody>
    </Table>

   ))}
   
   

      </Form>
      </div> 
     

      </div>

    )
}

export default ResultSales;