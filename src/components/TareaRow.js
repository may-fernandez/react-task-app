import React from "react";

function TareaRow({tarea, actualizarTarea}) {
  return (
    <tr>
      <td className="td-tareas">
        <div className="div-tareas">{tarea.name}</div>
        <input
          type="checkbox"
          checked={tarea.completed}
          onChange={() => actualizarTarea(tarea)}
          className="checkbox"
        />
        
      </td>
    </tr>
  );
}

export default TareaRow;