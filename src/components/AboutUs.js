import img from "../images/accounts.png";
import Alert from "react-bootstrap/Alert";

function AboutUs() {
  return (
    <div className="allabout">
      <div>
        <img src={img} width={400}></img><br></br>
        <div className="profilePic">
        <img src="https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg?ver=6" width={80}></img>
        <h9>C.P.Alfredo Arellano</h9>
        <br/>
        <h9>CEO</h9>
        </div>
      </div>

      <div className="about">
        <Alert variant="light">
          <Alert.Heading>
            Somos una una firma contable especializada en soluciones fiscales,
            auditoría, contabilidad, precios de transferencia, administración de
            nómina y consultoría de negocios.
          </Alert.Heading>
          <br />
          <br />
          <p>
            Estamos enfocados en brindar la mejor asesoría, atendiendo las
            necesidades de negocio y crecimiento de nuestros clientes.
            <br />
            Ofrecemos una asesoría profesional y de la más alta calidad,
            observando las disposiciones legales aplicables, brindando una
            visión clara y eficiente con el enfoque de negocios que demanda el
            mercado, orientada hacia la mejora de los procesos en las empresas,
            y conduciéndonos en todo momento con la honestidad y ética
            profesional que nos caracteriza.
          </p>
          <hr />
          <p className="mb-0"></p>
          <br />
        </Alert>
      </div>
    </div>
  );
}

export default AboutUs;
