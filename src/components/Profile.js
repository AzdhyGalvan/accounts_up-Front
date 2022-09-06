
import Card from 'react-bootstrap/Card';



function Profile ({user}){
    return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.imageUrl} />
      <Card.Body>
        <Card.Title>Razon Social:{user.razonSocial}</Card.Title>
        <Card.Text>RFC:{user.rfc}</Card.Text>
        <Card.Text>Regimen:{user.person}</Card.Text>
        <Card.Text>Direccion Fiscal:{user.fiscalAdress}</Card.Text>
        <Card.Text>Email:{user.email}</Card.Text>
        
      </Card.Body>
    </Card>
    )

}

export default Profile