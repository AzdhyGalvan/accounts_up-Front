import Carousel from 'react-bootstrap/Carousel';

function CaRousel() {
  return (
    <div className='carousel'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.paradavisual.com/wp-content/uploads/2019/08/cropped-despacho-virtual-contable-destacada-1-1024x576.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Somos una firma confiable en la que puedes confiar</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.freshbooks.com/wp-content/uploads/set-up-business-bank-account.jpg.optimal.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Nos tomamos muy enserio el crecimieto del capital de nuestros clientes</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://concepto.de/wp-content/uploads/2013/05/costo.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Comprometidos contigo</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CaRousel;