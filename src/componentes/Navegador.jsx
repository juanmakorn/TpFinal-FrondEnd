import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoFooter from "../LogoUnsta.jpg";
import Image from 'react-bootstrap/Image';
import './Footer.css'

function navegador() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
      <Image  src={logoFooter} id="logoFooter" alt='logoFooter'></Image>

        <Navbar.Brand href="#home"> <Navbar.Text><h4>Trabajo Final - Frond End</h4></Navbar.Text></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <h4>Finanzas Personales</h4>
           Gabriela Jerez, Juan Manuel Gimenez
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navegador;