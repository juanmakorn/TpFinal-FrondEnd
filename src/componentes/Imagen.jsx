import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Imagen() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="src\LogoUnsta.jpg" rounded />
        </Col>
        {/* Otros ejemplos con roundedCircle y thumbnail */}
      </Row>
    </Container>
  );
}

export default Imagen;
