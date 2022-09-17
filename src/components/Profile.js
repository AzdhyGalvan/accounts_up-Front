import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { editUserWs } from "../services/user.ws";

import { uploadSingle } from "../services/upload-file";
import { Link } from "react-router-dom";

function Profile({ user, autenticate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [img, setImage] = useState(user.imageUrl);
  const [fiscalAdressN, setFiscal] = useState(user.fiscalAdress);
  const elInput = useRef("input");

  const abrirImagen = () => {
    console.log("la ref", elInput);
    elInput.current.click();
  };

  const cambiarImagen = (e) => {
    console.log("la ref", e.target.files[0]);
    //const sendImg ={image :e.target.files[0]}

    const formData = new FormData();

    formData.append("image", e.target.files[0]);
    uploadSingle(formData)
      .then((res) => {
        const { data, status, errorMessage } = res;

        if (status) {
          console.log("que es mi res", res);
          setImage(res.data.url.uri);
          alert("Tu datos han sido actualizados");
        } else {
          alert(errorMessage);
        }
      })
      .catch((error) => {
        console.log("Cual es mi error", error);
      });
  };

  const onChangeAdress = (e) => {
    setFiscal(e.target.value);
  };

  const submitData = () => {
    editUserWs({ imageUrl: img, fiscalAdress: fiscalAdressN })
      .then((res) => {
        console.log("TodoBien", res);
        autenticate(res.data.user);
      })
      .catch((error) => {
        console.log("Cual es mi error", error);
      });
  };

  return (
    <div className="cardCol">

      <div>
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={typeof img != "string" ? URL.createObjectURL(img) : img}
            />

            <Card.Body>
              <Card.Text>
                <h7>Razon Social:</h7> {user.razonSocial}
              </Card.Text>

              <Card.Text>
                <h7>RFC:</h7> {user.rfc}
              </Card.Text>
              <Card.Text>
                <h7>Regimen:</h7> {user.person}
              </Card.Text>
              <Card.Text>
                <h7>Direccion Fiscal:</h7> {user.fiscalAdress}
              </Card.Text>

              <Card.Text>
                <h7>Email:</h7>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
        {isEdit ? (
          <>
            <div className="buttonImg">
              <Button size="sm" variant="secondary" onClick={abrirImagen}>
                Editar Foto de Perfil{" "}
              </Button>
              <input
                ref={elInput}
                type={"file"}
                hidden
                onChange={cambiarImagen}
              ></input>
            </div>
            <div className="buttonImg">
              <label>
                <h7>Direccion Fiscal:</h7>
              </label>

              <input
                name="fiscalAdress"
                value={fiscalAdressN}
                onChange={onChangeAdress}
              ></input>
            </div>
            <br />
            <Button onClick={submitData} variant="info">
              Guardar cambios
            </Button>
            <br />
          </>
        ) : (
          <Button
            className="btn"
            onClick={() => setIsEdit((prevState) => !prevState)}
          >
            Editar datos
          </Button>
        )}
      </div>
      
    
      <div className="cards">
        <div className="cardi">
          <Card border="primary" className="purchas">
            <Card.Body>
              <Card.Title className="textA">Gastos</Card.Title>
              <div className="textA">
              <img  src="https://cdn-icons-png.flaticon.com/512/2273/2273172.png" width={80} height={50}></img>
              </div>
            </Card.Body>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/list-purchases"}>
                      Lista
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/new-purchase"}>
                      Cargar gasto
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
          </Card>
        </div>
        <div className="cardi">
          <Card border="primary">
            <Card.Body>
              <Card.Title className="textA">Costos</Card.Title>
              <div className="textA">
              <img src="https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-dollar-increase-icon-money-symbol-with-arrow-stretching-rising-up-png-image_447935.jpg" width={80} height={50}></img>
              </div>
            </Card.Body>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/list-costs"}>
                      Lista
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/new-cost"}>
                      Cargar Costo
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
          </Card>
        </div>

        <div className="cardi">
          <Card border="primary">
            <Card.Body>
              <Card.Title className="textA">Ventas</Card.Title>
              <div className="textA">
              <img src="https://us.123rf.com/450wm/ahasoft2000/ahasoft20001507/ahasoft2000150700866/42708132-icono-de-ventas-glifo-estilo-es-colores-blanco-y-gris-plana-bot%C3%B3n-cuadrado-redondeado-en-un-fondo-bl.jpg?ver=6"width={70} height={50}></img>
              </div>
            </Card.Body>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/list-ventas"}>
                      Lista
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link className="linkFooter2" to={"/new-sale"}>
                      Cargar Venta
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
          </Card>
        </div>

        <div className="buttonRes">
          <Button variant="secondary">
            <Link className="buttonRes" to={"/global-results"}>
              Estado de Resultados
            </Link>
          </Button>

          <br/>
          <br/>
        
          <a href="https://www.integraconsorcio.com.mx/blog/articulo/SAT_anuncia_pr%C3%B3rroga_para_la_facturaci%C3%B3n_4.0_"><img src="https://www.integraconsorcio.com.mx/images/blog/single/62a0e2d43772d.jpg" width={250}></img></a>
         


        </div>
      </div>

      
    </div>
    
  );
}

export default Profile;
