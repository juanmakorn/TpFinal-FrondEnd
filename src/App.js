import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Tabla from './componentes/Tabla';
import Badge from 'react-bootstrap/Badge';

const App = () => {
  const [gastos, setGastos] = useState(() => {
    const savedGastos = localStorage.getItem('gastos');
    return savedGastos ? JSON.parse(savedGastos) : [];
  });

  const [gastoEditar, setGastoEditar] = useState(null);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  const eliminarGasto = (id) => {
    if(window.confirm(`Estas seguro de eliminar este registro => '${id}'?`)){
      setGastos(gastos.filter((gasto) => gasto.id !== id));
    }
	  };

  const editarGasto = (gasto) => {
    if(window.confirm(`Estas seguro de editar este registro => ''?`)){
    setGastoEditar(gasto);}
  };

  const actualizarGasto = (gastoActualizado) => {
    setGastos(gastos.map((gasto) => (gasto.id === gastoActualizado.id ? gastoActualizado : gasto)));
    setGastoEditar(null);
  };

  return (
    <div className="container">
      <h1 className="my-4"><Badge bg="secondary">Registro de Gastos</Badge> </h1>
      <Formulario onAgregarGasto={agregarGasto} gastoEditar={gastoEditar} onActualizarGasto={actualizarGasto} />
      <Tabla gastos={gastos} onEliminarGasto={eliminarGasto} onEditarGasto={editarGasto} />
    </div>
  );
};

export default App;

