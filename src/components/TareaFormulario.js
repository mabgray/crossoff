 import React, { useState } from "react";
import "../hojas-de-estilo/TareaFormulario.css";

function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value)

  }

   const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: "34545",
      texto:input,
      completada: false
    }
   }

  return (
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="write your task here"
        name="text"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">add task</button>
    </form>
  );
}

export default TareaFormulario;
