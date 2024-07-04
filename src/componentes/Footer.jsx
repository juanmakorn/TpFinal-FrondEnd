import './Footer.css';
import { Facebook,Twitter,Instagram,Whatsapp } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import logoFooter from "../LogoUnsta.jpg"

const Footer = () => {

    return (
        <footer className="bg-body-tertiary" id="foot">

            <Container >
                <aside className="col-md-4 ">
                    <a href={'/'}>
                    <img src={logoFooter} id="logoFooter" alt='logoFooter'></img>
                    </a>
                </aside>
                   <aside className="col-md-4 ">
                    <h6>Síguenos en nuestras redes sociales</h6>
                    <a href={'*'} className='bs-light mx-2' target='' ><Facebook></Facebook></a>
                    <a href={'*'} className='bs-light mx-2' target=''><Twitter></Twitter></a>
                    <a href={'*'} className='bs-light mx-2' target=''><Instagram></Instagram></a>
                    <a href={'*'} className='bs-light mx-2' target=''><Whatsapp></Whatsapp></a>
                </aside>
            </Container>
            <section className='text-light text-center'>
             <p>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
        
        
    );
};
export default Footer;