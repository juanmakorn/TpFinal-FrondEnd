
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './componentes/Navegador';
import App from './App';
import Footer from './componentes/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegador />
    <App />
    <Footer />
  </React.StrictMode>
);

