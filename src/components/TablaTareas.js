import React from "react";
import TareaRow from "./TareaRow.js";

function TablaTareas({ itemTareas, actualizarTarea, showCompleted = false}) {
  function tablasDeTareas(valorRealizada) {

    return ( 
      itemTareas.filter(tarea => tarea.completed === valorRealizada)
      .map((tarea) => (
      <TareaRow
        tarea={tarea}
        key={tarea.name}
        actualizarTarea={actualizarTarea}
      />
    )));
  }

  return (
    <table className="tabla-tareas">
      <thead>
        <tr>
          <th className="titulo-tareas">Tareas</th>
        </tr>
      </thead>
      <tbody>{tablasDeTareas(showCompleted)}</tbody>
    </table>
  );
}

export default TablaTareas;
