import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Tabla = ({ gastos, onEliminarGasto, onEditarGasto }) => {
  return (
    <Table striped bordered hover className="table mt-4 " >
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Monto $</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {gastos.length > 0 ?
        gastos.map((gasto) => (
          <tr key={gasto.id}>
            <td>{gasto.fecha}</td>
            <td>{gasto.categoria}</td>
            <td>{gasto.detalle}</td>
            <td>${gasto.monto}</td>
            <td>
              <Button variant="outline-warning" onClick={() => onEditarGasto(gasto)}>Editar</Button>
              <Button variant="outline-danger" onClick={() => onEliminarGasto(gasto.id)}>Eliminar</Button>
            </td>
          </tr>
        )):(
          <tr>
            <td colSpan={3}>No Tiene registros cargados</td>
          </tr>
        )
        }
      </tbody>
    </Table>
  );
};

export default Tabla;
