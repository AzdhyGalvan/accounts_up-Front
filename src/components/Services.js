import img from '../images/1570887.png'
import Table from 'react-bootstrap/Table';

function Services(){
    return(
        <div>
         <h1>Como podemos ayudarte..</h1>
        <br/>

        <div className='services'>
        <div className='pTable'>
        <h3 >FISCAL Y CONTABLE</h3>
          <td><img src={img} width={50}></img></td>
          <td>Asesoría contable y fiscal.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Calculo de impuestos.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Declaraciones.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Contabilidad electrónica.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Corrección de situación fiscal.</td><br/>
          <div className='imgServices'>
          <img  src='https://upload.wikimedia.org/wikipedia/commons/7/70/LogoSAT.png' width={80}></img>
          </div>
        </div>

        <div className='pTable'>
        <h3>SEGURIDAD SOCIAL</h3>
          <td><img src={img} width={50}></img></td>
          <td>Registros patronales.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Determinación de cuotas obrero-patronal.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Altas y bajas de trabajadores.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Timbrado de nómina.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Asesoría para pensiones.</td><br/>
          <div className='imgServices'>
          <img className='imgServices'src='https://elpuntero.com.mx/inicio/wp-content/uploads/2020/07/IMSS-1.jpg' width={130} ></img>
          </div>
        </div>

        <div className='pTable'>
        <h3>OTROS SERVICIOS</h3>
          <td><img src={img} width={50}></img></td>
          <td>Facturación.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Determinación de Costos.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Elaboración de presupuestos.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Análisis financieros.</td><br/>
          <td><img src={img} width={50}></img></td>
          <td>Flujo de efectivo.</td><br/>
          <img src='https://www.makesoft.es/wp-content/uploads/2015/10/Microsoft_Power_BI.jpg' width={100} ></img>
          <img src='https://cpsmexico.com/web/wp-content/uploads/2020/03/LogoContpaqiNubeContabilidad-300x137.png' width={100} ></img>
          <img src='https://outvio.com/static/c65018c137268c33a764c5380b0debff/cc6f6/cl0ushwbo00017ad2gqipcadr.jpg' width={100} ></img>
        </div>
        </div>

        </div>
    )
}

export default Services