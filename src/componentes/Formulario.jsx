import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";

const Formulario = ({ onAgregarGasto, gastoEditar, onActualizarGasto }) => {
  const [categoria, setCategoria] = useState('');
  const [detalle, setDetalle] = useState('');
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (gastoEditar) {
      setCategoria(gastoEditar.categoria);
      setDetalle(gastoEditar.detalle);
      setFecha(gastoEditar.fecha);
      setMonto(gastoEditar.monto);
      setIsEdit(true);
    }
  }, [gastoEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      onActualizarGasto({ categoria, detalle, fecha, monto, id: gastoEditar.id });
    } else {
      onAgregarGasto({ categoria, detalle, fecha, monto, id: Date.now() });
    }
    setCategoria('');
    setDetalle('');
    setFecha('');
    setMonto('');
    setIsEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Categoría</label>
        <select className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Seleccione una categoría</option>
          <option value="Transporte">Transporte</option>
          <option value="Almacén">Almacén</option>
          <option value="Estacionamiento">Estacionamiento</option>
          <option value="Gimnasio">Gimnasio</option>
          <option value="Luz">Luz</option>
          <option value="Agua">Agua</option>
          <option value="Gas">Gas</option>
          <option value="Celular">Celular</option>
          <option value="Internet">Internet</option>
          <option value="Impuestos">Impuestos</option>
          <option value="Gastos Varios">Gastos Varios</option>
        </select>
      </div>
      <div className="form-group">
        <label>Detalle</label>
        <input type="text" className="form-control" value={detalle} onChange={(e) => setDetalle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Fecha</label>
        <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Monto $</label>
        <input type="number" step="100" min="0" className="form-control" value={monto} onChange={(e) => setMonto(e.target.value)} required />
      </div>
      <Button variant="outline-success" type="submit" >{isEdit ? 'Aceptar' : 'Agregar'}
     </Button>
    </form>
  );
};

export default Formulario;


