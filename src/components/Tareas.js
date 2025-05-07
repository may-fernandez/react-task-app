import React, { useState } from "react";

function Tareas({ agregarNuevaTarea }) {
  const [newTarea, setNewTarea] = useState("");

  function handleInputChange(event) {
    setNewTarea(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    agregarNuevaTarea(newTarea);
    setNewTarea("");
  }

  return (
    <div className="tareas">
      <h1>Agenda de Tareas</h1>

      <div className="input-y-btn">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Agrega una tarea..."
            value={newTarea}
            onChange={handleInputChange}
            className="input-agregar"
          />

          <button className="btn-agregar">Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Tareas;