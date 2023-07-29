import React from "react";
import "../hojas-de-estilo/TareaFormulario.css";

function TareaFormulario(props) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="write your task here"
        name="text"
      />
      <button className="tarea-boton">add task</button>
    </form>
  );
}

export default TareaFormulario;
