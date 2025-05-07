import React from "react";

function ControlVisibilidad({ isChecked, setShowCompleted, limpiarTareas }) {
  function handleDelete() {
    if (
      window.confirm("¿Estás seguro de querer eliminar las tareas realizadas?")
    ) {
      limpiarTareas();
    }
  }

  return (
    <div className="div-mostrar-tareas">
      <input
        checked={isChecked}
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
        className="checkbox-mostrar-tareas"
      />
      <label id="label-tareas-hechas">Mostrar tareas hechas</label>

      <button onClick={handleDelete} id="btn-limpiar ">
        Limpiar
      </button>
    </div>
  );
}

export default ControlVisibilidad;
