import Tareas from "./components/Tareas.js";
import TablaTareas from "./components/TablaTareas.js";
import ControlVisibilidad from "./components/ControlVisibilidad.js";
import { useState, useEffect } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function agregarTarea(newTarea) {
    if (!tareas.find((tarea) => tarea.name === newTarea)) {
      const nuevaTarea = { name: newTarea, completed: false };
      setTareas([...tareas, nuevaTarea]);
    }
  }

  function actualizarTarea(tarea) {
    setTareas(
      tareas.map((t) =>
        t.name === tarea.name ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function limpiarTarea() {
    setTareas(tareas.filter((tarea) => !tarea.completed));
    setShowCompleted(false);
  }

  useEffect(() => {
    let data = localStorage.getItem("ttareas");

    if (data) {
      setTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ttareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="App">
      <Tareas agregarNuevaTarea={agregarTarea} />
      <TablaTareas className='tarea' itemTareas={tareas} actualizarTarea={actualizarTarea} />

      <ControlVisibilidad
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        limpiarTareas={limpiarTarea}
      />

      {showCompleted === true ? (
        <TablaTareas
          className='tareas-completadas'
          itemTareas={tareas}
          actualizarTarea={actualizarTarea}
          showCompleted={showCompleted}
        />
      ) : null}
    </div>
  );
}

export default App;
