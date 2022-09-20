import Form from 'react-bootstrap/Form';
import {purchasesResults} from '../services/results.ws'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { editPurchaseWs, deletePurchaseWs } from '../services/purchase.ws'

function ResultPurchase(){

    const [listPurchase,setListPursache] = useState([])
    const [month,setMonth] = useState(null)
    const [all,setAll] = useState()
    const [isEdit, setIsEdit] = useState(false);
  const [editData,setEditdata] = useState ({id:'',payroll:'',taxes:'',ligth:'',phone:''})

  const onChangePayroll =(payroll,id)=>{
    setEditdata({...editData,id,payroll})
  }
  
  const onChangeTaxes =(taxes,id)=>{
    setEditdata({...editData,id,taxes})
    
  }
  const onChangeLigth =(ligth,id)=>{
    setEditdata({...editData,id,ligth})
    
  }

  const onChangePhone =(phone,id)=>{
    setEditdata({...editData,id,phone})
    
  }

    const onChangeMonth = e =>{
        setMonth(e.target.value)
        
    }


    const onClickDelete = (id, idArr) => {
      deletePurchaseWs(id)
        .then(() => {
          const newArr = listPurchase;
       
          setListPursache(newArr.filter((item) => item._id !== id));
        })
        .catch((error) => {
          console.log("Cual es mi error", error);
        });
    };

    const submitData = (id) =>{

      if(id !== editData.id){
        return
      }
          editPurchaseWs(id,editData)
          .then(res=>{
            console.log("TodoBien",res) 
            
          })
          .catch(error=>{
            console.log("Cual es mi error",error)
          })
        }
  


    useEffect(()=>{
        if(month != null){
            purchasesResults({month})
        .then(res=>{
            setListPursache(res.data.months)
            setAll(res.data.totalMonth)
            
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
          <th>id</th>
          <th>Nomina</th>
          <th>Impuestos</th>
          <th>Luz</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cost._id}</td>
          <td>${cost.payroll}.00</td>
          <td>${cost.taxes}.00</td>
          <td>${cost.ligth}.00</td>
          <td>${cost.phone}.00</td>   
          {isEdit ? 
              <>
              <td><label>Nomina</label> <input name="payroll" value={editData.id===cost._id ? editData.payroll : cost.payroll } onChange={(e)=>onChangePayroll(e.target.value,cost._id)}></input></td>
              <td><label>Impuestos</label> <input name="taxes" value={editData.id===cost._id ? editData.taxes : cost.taxes } onChange={(e)=>onChangeTaxes(e.target.value,cost._id)}></input></td>
              <td><label>Luz</label> <input name="ligth" value={editData.id===cost._id ? editData.ligth : cost.ligth } onChange={(e)=>onChangeLigth(e.target.value,cost._id)}></input></td>
              <td><label>Telefono</label> <input name="phone" value={editData.id===cost._id ? editData.phone : cost.phone } onChange={(e)=>onChangePhone(e.target.value,cost._id)}></input></td>
              <td><button onClick={(e)=>{
                submitData(cost._id) }} >Guardar </button></td>
                  
              <td><button onClick={(e)=> {
            e.preventDefault()
             onClickDelete(cost._id)}}>Borrar</button></td>
          
          </>
          :
          <td><button onClick={() => setIsEdit((prevState) => !prevState)}>Editar</button></td>
          }       
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