import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div className='footer'>
    <Container >
      <Navbar   >
        <Container  >
          
          <div className='fotterBrand brand'>
          <p className='contact'>Contactanos:</p>
          <p>✆ 4776304022</p>
          <p>✉alfredoup20@gmail.com</p>
           <p> ⌖ León,Gto.México</p> 
          
          </div>
          <div className='brand2'>
            <p>Acerca de Nosotros</p>
            <p>Nuestros Servicios</p>
            
          </div>
          <div className='brand2'>
            <p>Visitanos en nuestras redes sociales</p>
            <a href='https://www.instagram.com/accounts_up/'><img  src='https://www.pngmart.com/files/13/Instagram-Logo-PNG-HD.png' width={80} height={50}></img></a>
            <a href='https://www.facebook.com/acntup/'><img src='https://image.jimcdn.com/app/cms/image/transf/dimension=409x2048:format=png/path/s246394722060b36c/image/i779cea92a3fa2990/version/1617203272/image.png' width={80} height={50}></img></a>
            <img src='https://i.pinimg.com/originals/f3/04/f8/f304f8984a6f9cc880a5e0e913b609b2.png' width={50} height={30}></img>
          </div>
          
        </Container>
      </Navbar>
    </Container>
    </div>
  );
}

export default Footer;