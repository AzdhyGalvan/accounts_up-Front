import {salesResults,purchasesResults,costsResults} from '../services/results.ws'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function GlobalResults(){

    const [listPurchase,setListPursache] = useState([])
    const [listSales,setListSales] = useState([])
    const [listCost,setListCost] = useState([])
    const [month,setMonth] = useState(null)
    const [allPurchase,setAllPurchase] = useState()
    const [allCost,setAllCost] = useState()
    const [allSales,setAllSales] = useState()

    const onChangeMonth = e =>{
        setMonth(e.target.value)
        
    }

    useEffect(()=>{
        if(month != null){
            purchasesResults({month})
        .then(res=>{
            setListPursache(res.data.months)
            setAllPurchase(res.data.totalMonth)
            
        })
        }
    },[month])

    useEffect(()=>{
        if(month != null){
            salesResults({month})
        .then(res=>{
            setListSales(res.data.months)
            setAllSales(res.data.sumall)
            
        })
        }
    },[month])

    useEffect(()=>{
        if(month != null){
        costsResults({month})
        .then(res=>{
            setListCost(res.data.months)
            setAllCost(res.data.sumall)
            
        })
        }
    },[month])

    const all = 0
    const total= allSales - (allPurchase + allCost) 
    

return (
        <div>
        <h3>Estado de Resultados</h3>

     <div className='tableA'>  
     <div>
    
    <p>Total mensual gastos <h5>${allPurchase}.00</h5> </p>
    <p>Total mensual costos <h5>${allCost}.00</h5> </p>
    <p>Total mensual ventas <h5>${allSales}.00</h5> </p>
    <br/>
    <p><h4>Resultado:</h4><h5>${all + total}.00   {total > 0 ? '(ganacia)' : '(perdida)'}</h5> </p>

    
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


 
   
   

      </Form>
      </div> 
     

      </div>

    )
}


export default GlobalResults;