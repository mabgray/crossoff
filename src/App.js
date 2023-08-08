import React from 'react';

import './App.css';
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <h1 className="logo">  Lista de Deberes</h1>
      </div>
      <div className="tareas-lista-principal">
        <h2>Hazlo!</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
